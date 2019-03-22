const express = require('express');
const router = express.Router();
const moment = require('moment');

const {complaint} = require('../db/complaintModel');

let routes = (io) => {

    //Save Complaint to DB
    router.post('/savecomplaint', (req, res) => {
        const data = req.body.complaint;

        let newComplaint = new complaint({
            ...data,
            createdAt: moment().toISOString(),
            status: 'new'
        });

        newComplaint.save()
        .then((complaint) => {
            res.status(200).send(complaint);
            io.emit('newComplaint', complaint);
        },(err) => {
            res.status(400).send(err);
        });
    });






    return router;
}

module.exports = routes;