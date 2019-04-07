const express = require('express');
const router = express.Router();
const moment = require('moment');
const auth = require('../middleware/auth');

const {User} = require('../db/userModel');

//SIGN-IN USER
router.post('/signin', async (req, res) => {
    const userData = req.body;

    let newUser = new User({
        firstName : userData.firstName,
        secondName: userData.secondName,
        email: userData.email,
        password: userData.password,
        createdAt: moment().valueOf()
    })

    try {
        await newUser.save()
        const token = await newUser.generateAuthToken()
        res.status(201).send({message: 'user created', token})
    } catch (err) {
        // throw new Error(err);
        res.status(400).send({error : err})
    }

});

//LOGIN USER
router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        });
    } catch (err) {
        res.status(400).send()
    }
});

//GET MY USER
router.get('/me', auth, async (req, res) => {
    res.send(req.user)
});

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

module.exports = router;