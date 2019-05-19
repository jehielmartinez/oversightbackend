const mongoose = require('mongoose')
const moment = require('moment')

let homeSchema = new mongoose.Schema({
    familyName:{
        type: String,
        required: true,
        trim: true
    },
    homeNumber:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    community:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
    },
    createdAt:{
        type: String,
        required: true
    }
})

HomeSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'home' 
})

const Home = mongoose.model('Home', homeSchema)

module.exports = {Home}