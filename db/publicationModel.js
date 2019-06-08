const mongoose = require('mongoose');

let publicationSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    community: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Community'
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    media: {
        type: Buffer,
        select: false
    },
    createdAt:  {
        type: String,
        required: true
    },
    comments:  {
        type: Array
    },
    likes:  [{
        liker: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    poll: {
        options: [{
            description: {
                type: String,
                trim: true,
                required: true
            },
            count: {
                type: Number,
                trim: true,
                required: true,
                default: 0
            }  
        }],
        expiration: {
            type: String,
            required: true
        }
    },
    mediaExist: {
        type: Boolean,
        required: true
    },
    pollExist: {
        type: Boolean,
        required: true
    }
})

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = {Publication} 
