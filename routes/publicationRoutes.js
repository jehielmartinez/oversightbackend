const express = require('express');
const router = express.Router();
const moment = require('moment');
const multer = require('multer');

const {publication} = require('../db/publicationModel');

const upload = multer({
    limits: {
      fileSize: 2000000 //2Mb
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpeg|jpg)$/)){
        return cb(new Error('Please upload an image file'))
      } 
      cb(undefined, true)
    }
  });

let routes = (io) => {

    //Save New Publication
    router.post('/publish', upload.single('media'), async (req, res) => {
        let image
        
        if (req.file) {
            image = req.file.buffer
        } else {
            image = null
        }

        let newPublication = new publication({
            content: req.body.content,
            createdAt: moment().valueOf(),
            media: image,
            user: req.body.user,
            mediaExist: req.body.mediaExist
        });

        try {
            await newPublication.save()
            res.status(201).send({message: 'publication success'});
        } catch (err) {
            // throw new Error(err);
            res.status(400).send({error: err})
        }
    });


    //Get Image from ID
    router.get('/:id/media', async (req, res) => {

        try {
            const pub = await publication.findById(req.params.id).select('+media');

            if (!pub){
                return res.status(404).send();
            }
            
            res.set('Content-Type', 'image/jpg');
            res.send(pub.media);
        } catch (err) {
            res.status(400).send({error: err})
        }
    
    });


    //Get all publications
    router.get('/all', async (req, res) => {

        try {
            const publications = await publication.find()
            res.send(publications)
        } catch (err) {
            res.status(400).send({error: err})
        }

    });

    return router;
}
    
    module.exports = routes;