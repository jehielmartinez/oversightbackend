const express = require('express');
const router = express.Router();
const moment = require('moment');
const auth = require('../middleware/auth');

const {User} = require('../db/userModel');

//SIGN-IN USER
router.post('/signin', async (req, res) => {
    const userData = req.body;

    let newUser = new User({
        ...userData,
        createdAt: moment().valueOf()
    })

    try {
        await newUser.save()
        const token = await newUser.generateAuthToken()
        res.status(201).send({
            message: 'User created',
            user: newUser,
            token
        })
    } catch (err) {
        // throw new Error(err);
        res.status(400).send({error : err})
    }

})

//LOGIN USER
router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })
    } catch (err) {
        res.status(400).send()
    }
})

//LOGOUT
router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((item) => {
            return item.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (err) {
        res.status(500).send()
    }
})

//LOGOUT ALL SESSIONS
router.post('/logoutall', auth, async (req, res) => {

    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (err) {
        res.status(500).send()
    }

})

//GET MY USER
router.get('/me', auth, async (req, res) => {
    res.send(req.user)
})

//DELETE ME
router.delete('/me', auth, async (req, res) => {

    try {
        await req.user.remove()
        res.send({user: req.user, message: 'User Deleted'})
    } catch (err) {
        res.status(500).send()
    }

})

//UPDATE MY PROFILE
router.patch('/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName', 'secondName', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates!'})
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send({user: req.user, message: 'User Updated'})
    } catch (err) {
        res.status(400).send({error: err})
    }
})

module.exports = router;