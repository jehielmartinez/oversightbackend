const express = require('express');
const router = express.Router();
const moment = require('moment');
const auth = require('../middleware/auth');

const {Community} = require('../db/communityModel');
const {User} = require('../db/userModel');

//NEW COMMUNITY
router.post('/new', auth, async (req, res) => {

    const community = new Community({
        ...req.body.community,
        createdAt: moment().valueOf(),
    })

    try {

        await community.save()
        await community.generatePasscode(req.body.expiration)

        req.user.community = community._id
        req.user.admin = true
        await req.user.save()

        res.status(201).send(community)
    } catch (err) {
        res.status(400).send(err)
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

//ADD NEW USER TO COMMUNITY     
router.post('/adduser/:passcode', auth, async (req, res) => {
    try {
        const community = await Community.checkPasscode(req.params.passcode)

        req.user.community = community._id
        await req.user.save()

        res.send(community)
    } catch (err) {
        res.status(404).send(err.toString())
    }
})

//SEND PASSCODE TO USER PHONE
router.patch('/sendpasscode', auth, async (req, res) => {
    try {
        if (req.user.admin){
           const community = await Community.findById(req.user.community)
           await User.findOneAndUpdate({'phone': req.body.phone}, {communityPasscode: community.passcode.code})
           res.send()
        }
    } catch (err){
        res.status(400).send(err.toString())
    }
})

//GET COMMUNITY PUBLICATIONS
router.get('/publications', auth, async (req, res) => {
    try {   
        const community = await Community.findById(req.user.community)
        
        await community.populate({path: 'publications', populate: {path: 'owner'}}).execPopulate()

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
