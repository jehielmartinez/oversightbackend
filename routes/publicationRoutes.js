const express = require('express');
const router = express.Router();
const moment = require('moment');
const multer = require('multer');
const auth = require('../middleware/auth')

const {Publication} = require('../db/publicationModel');

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

//CREATE NEW PUBLICATION
    router.post('/publish', auth, upload.single('media'), async (req, res) => {
        let image
        
        if (req.file) {
            image = req.file.buffer,
            req.body.mediaExist = true
        } else {
            image = null,
            req.body.mediaExist = false
        }

        let newPublication = new Publication({
            content: req.body.content,
            createdAt: moment().valueOf(),
            media: image,
            owner: req.user._id,
            mediaExist: req.body.mediaExist,
            community: req.user.community
        });

        try {
            await newPublication.save()
            res.status(201).send({publication: newPublication, message: 'Publication Created'});
        } catch (err) {
            res.status(400).send({error: err})
        }
    });


//GET MEDIA FROM ID auth??
    router.get('/:id/media', async (req, res) => {

        try {
            const pub = await Publication.findById(req.params.id).select('+media');

            if (!pub){
                return res.status(404).send();
            }
            
            res.set('Content-Type', 'image/jpg');
            res.send(pub.media);
        } catch (err) {
            res.status(400).send({error: err})
        }
    
    });

//DELETE PUBLICATION BY ID
    router.delete('/:id', auth, async (req, res) => {
        const _id = req.params.id

        try {
            const publication = await Publication.findOne({_id, owner: req.user._id})

            if (!publication) {
                return res.status(404).send()
            }

            await publication.remove()

            res.send({publication, message: 'Publication Deleted'})
        } catch (err) {
            res.status(400).send(err)
        }
    })

//GET ONE PUBLICATION BY ID
    router.get('/:id', auth, async (req, res) => {
        const _id = req.params.id

        try {
            const publication = await Publication.findById(_id)

            if(!publication) {
                return res.status(404).send()
            }

            res.send(publication)
        } catch (err) {
            res.status(400).send({error: err})
        }
    })

//GET ALL MY PUBLICATIONS
    router.get('/all/mine', auth, async (req, res) => {
        try {
            await req.user.populate('publications').execPopulate()
            res.send(req.user.publications)
        } catch (err) {
            res.status(500).send({error: err})  
        }
    })

//LIKE A PUBLICATION
    router.patch('/like', auth, async (req, res) => {
        try {
            const publication = await Publication.findById(req.body._id)
            publication.likes = publication.likes.concat({liker: req.user._id})

            await publication.save()

            res.send(publication)
        } catch (err) {
            res.status(400).send({error: err})
        }
    })

//UNLIKE A PUBLICATION
    router.patch('/unlike', auth, async (req, res) => {
        try {
            const publication = await Publication.findById(req.body._id)
            
            publication.likes = publication.likes.filter((item) => {
                return item.liker === req.user._id
            })

            await publication.save()

            res.send(publication)
        } catch (err) {
            res.status(400).send({error: err})
        }
    })
    
module.exports = router;