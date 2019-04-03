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
    router.post('/publish', upload.single('image'), async (req, res) => {
        let newPublication = new publication({
            content: req.body.content,
            createdAt: moment().toISOString(),
            image: req.file.buffer,
            user: req.body.user
        });

        await newPublication.save()
            .then(()=>{
                res.status(200);
            }, (error)=>{
                throw new Error(error);
            });

        res.send()
    },(error, req, res, next) => {
        res.status(400).send({error: error.message})
    });


    //Get Image from ID
    router.get('/:id/image', async (req, res) => {
        await publication.findById(req.params.id).select('+image').then((publication)=>{
            res.set('Content-Type', 'image/jpg')
            res.send(publication.image)
        },(err)=>{
            throw new Error(err);
        });
    },(error, req, res, next) => {
        res.status(400).send({error: error.message})
    });


    //Get all publications
    router.get('/all', (req, res) => {
        publication.find().then((publications)=>{
            res.send(publications)
        },(err)=>{
            throw new Error(err);
        })
    },(error, req, res, next) => {
        res.status(400).send({error: error.message})
    });







    return router;
}
    
    module.exports = routes;