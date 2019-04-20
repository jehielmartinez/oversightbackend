const express = require('express');
const router = express.Router();
const moment = require('moment');
const auth = require('../middleware/auth');

const {Community} = require('../db/communityModel');

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
        res.status(400).send({error: err})
    }
})

//ADD NEW USER TO COMMUNITY
router.post('/adduser', auth, async (req, res) => {
    try {
        const community = await Community.checkPasscode(req.body.passcode)

        req.user.community = community._id
        await req.user.save()

        res.send(community)
    } catch (err) {
        res.status(404).send({error: err})
    }
})

//GET COMMUNITY PUBLICATIONS
router.get('/publications', auth, async (req, res) => {
    try {   
        const community = await Community.findById(req.user.community)
        
        await community.populate('publications').execPopulate()

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
