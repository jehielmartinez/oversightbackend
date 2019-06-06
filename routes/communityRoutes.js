const express = require('express');
const router = express.Router();
const moment = require('moment');
const auth = require('../middleware/auth');

const {Community} = require('../db/communityModel');
const {User} = require('../db/userModel');
const {Request} = require('../db/requestModel');

//NEW COMMUNITY
//body = {name, address, phone?, email?, coordinates?}
router.post('/new', auth, async (req, res) => {
    
    if (req.user.admin) {
        res.status(400).send({error: 'Ya es administrador'})
    }

    const community = new Community({
        ...req.body.community,
        createdAt: moment().valueOf(),
    })

    try {

        await community.save()

        req.user.community = community._id
        req.user.admin = true
        await req.user.save()

        res.status(201).send(community)
    } catch (err) {
        res.status(400).send(err)
    }
})

//GET ALL COMMUNITIES
//eventually change to a position based search and return five nearest.
router.get('/all-communities', auth, async (req, res) => {
    try {
        const communities = await Community.find()

        res.status(200).send(communities)
        
    } catch (err) {
        res.status(404).send()
    }
})

//GENERATE NEW PASSCODE
router.patch('/newpasscode', auth, async (req, res) => {

    if (!req.user.admin){
        res.status(400).send({error: 'No es Administrador'})
    }
    
    try {
        const community = await Community.findById(req.user.community)
        const code = await community.generatePasscode(req.body.expiration)
        
        res.status(201).send(code)

    } catch (err) {
        res.status(400).send()
    }
})

//RESPONSE REQUEST
//body should be a request object  
router.patch('/response-request', auth, async (req, res) => {

    if(!req.user.admin){
        res.status(400).send('Usted no es administrador') //Change for a middleware who compare admin and community
    }

    try {
        const request = await Request.findById(req.body._id)
        const user = await User.findById(req.body.user)

        request.status = req.body.status
        user.onRequest = false
          
        if (req.body.status === 'accepted'){
            user.community = req.body.community
        }

        await user.save()
        await request.save()

        res.status(200).send()
    } catch (err) {
        res.status(404).send(err.toString())
    }
})

//CREATE REQUEST
router.post('/send-request', auth, async (req, res) => {

    if (req.user.onRequest){
        res.status(400).send('User already requesting')
    }

    const request = new Request({
        user: req.user._id,
        community: req.body.community,
        createdAt: moment().valueOf()
    })

    try {
           await request.save()

           req.user.onRequest = true
           await req.user.save()

           res.status(201).send(request)
    } catch (err){
        res.status(400).send(err.toString())
    }
})

//GET COMMUNITY PUBLICATIONS
//url: /publications?limit=10&skip=0
router.get('/publications', auth, async (req, res) => {
    try {   
        const community = await Community.findById(req.user.community)
        
        await community.populate({
            path: 'publications', 
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort:{
                    createdAt: -1 //sorted newest first
                }
            },
            populate: {path: 'owner'}}).execPopulate()

        res.send(community.publications)
    } catch (err) {
        res.status(404).send({error: err})
    }
})

//GET COMMUNITY USERS
router.get('/users', auth, async (req, res) => {
    try {   
        const community = await Community.findById(req.user.community)
        
        await community.populate('users').execPopulate()

        res.send(community.users)
    } catch (err) {
        res.status(404).send({error: err})
    }
})

module.exports = router;
