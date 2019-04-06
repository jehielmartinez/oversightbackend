const mongoose = require('mongoose');

let publicationSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
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
    likes:  {
        type: Array
    },
    mediaExist: {
        type: Boolean
    }
});

let publication = mongoose.model('publication', publicationSchema);

module.exports = {publication}