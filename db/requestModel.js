const mongoose = require('mongoose')

let requestSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    community:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Community'
    },
    status:{
        type: String,
        default: 'requested'
    },
    createdAt:{
        type: String,
        required: true
    }
})

const Request = mongoose.model('Request', requestSchema)

module.exports = {Request}