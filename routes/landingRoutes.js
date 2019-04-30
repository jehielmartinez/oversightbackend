const express = require('express');
const router = express.Router();

const {Client} = require('../db/clientModel')

router.post('/submit', async (req, res) => {
    const client = new Client({
        ...req.body
    })

    try {
        await client.save()
        res.status(201).send(client)
    } catch (err) {
        res.status(400).send({error: err})
    }
})

router.get('/all', async (req, res) => {
    try {
        const clients = await Client.find()
        res.status(200).send(clients)
    } catch (err) {
        res.status(400).send({error: err})
    }
})

module.exports = router