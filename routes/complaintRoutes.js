const express = require('express');
const router = express.Router();
const moment = require('moment');
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "images",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const parser = multer({ storage: storage });

const {complaint} = require('../db/complaintModel');

let routes = (io) => {

//Save Complaint to DB
    router.post('/savecomplaint', (req, res) => {
        const data = req.body;

        let newComplaint = new complaint({
            complaintType: data.type,
            location: {
                latitude: data.location.latitude,
                longitude: data.location.longitude,
                string: data.location.string
            },
            body: data.body,
            createdAt: moment().toISOString(),
            status: 'new'
        });

        newComplaint.save()
            .then((complaint) => {
                res.status(200).send(complaint);
                io.emit('newComplaint', complaint)
            },(err) => {
                res.status(400).send(err);
        });
    });

    router.post('/image', (req, res)=>{
        let dataURI = req.body.dataURI;
        let uploadStr = 'data:image/jpeg;base64'+ dataURI;

        cloudinary.v2.uploader.upload(uploadStr, {
            overwrite: true,
            invalidate: true,
            width: 810, height: 456, crop: "fill"
        },
            function (error, result) {
                res.json(result);
            });
    });

    return router;
}

module.exports = routes;