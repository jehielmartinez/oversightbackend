const mongoose = require('mongoose');

let communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    coordinates:{
        lng: {
            type: Number,
            trim: true
        },
        lat: {
            type: Number,
            trim: true
        }
    },
    phone:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    createdAt: {
        type: String,
        required: true
    },
    passcodes: [{
        passcode: {
            type: String,
            required: true
        }
    }]
})

communitySchema.virtual('publications', {
    ref: 'Publication',
    localField: '_id',
    foreignField: 'community'
})

communitySchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'community'
})

communitySchema.statics.checkPasscode = async (passcode) => {

        const community = await Community.findOne({'passcodes.passcode': passcode})

        if(!community){
            throw new Error('Access Denied')
        } 
        
        return community
}

communitySchema.methods.generatePasscode = async function () {
    const community = this
    const passcode = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 8)

    community.passcodes = community.passcodes.concat({passcode})

    await community.save()

    return passcode
}

communitySchema.methods.toJSON = function () {
    const community = this
    const publicCommunity = community.toObject()

    delete publicCommunity.passcodes

    return publicCommunity
}

const Community = mongoose.model('Community', communitySchema)

module.exports = {Community}