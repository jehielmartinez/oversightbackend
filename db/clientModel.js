const mongoose = require('mongoose');

let clientSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    comment:{
        type: String,
        trim: true
    }
})

const Client = mongoose.model('Client', clientSchema)

module.exports = {Client}