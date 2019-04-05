const mongoose = require('mongoose');

let publicationSchema = new mongoose.Schema({
    user: {
        type: String
    },
    content: {
        type: String
    },
    media: {
        type: Buffer,
        select: false
    },
    createdAt:  {
        type: String
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