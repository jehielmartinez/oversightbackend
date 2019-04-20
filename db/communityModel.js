const mongoose = require('mongoose');
const moment = require('moment');

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
    phone:{
        type: String,
        trim:true
    },
    createdAt: {
        type: String,
        required: true
    },
    passcode: {
        code: {
            type: String,
            trim: true,
        },
        expiration: {
            type: String,
        }
    }   
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
    const community = await Community.findOne({'passcode.code': passcode})

    if(!community){
        throw new Error('Community Not found!')
    }

    const today = moment().valueOf()

    if(community.passcode.expiration < today){
        throw new Error('Passcode expired!')
    }

    return community
}

communitySchema.methods.generatePasscode = async function (expiration) {
    const community = this
    const code = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 8)

    community.passcode = {code, expiration}

    await community.save()

    return code
}

communitySchema.methods.toJSON = function () {
    const community = this
    const publicCommunity = community.toObject()

    delete publicCommunity.passcode

    return publicCommunity
}

const Community = mongoose.model('Community', communitySchema)

module.exports = {Community}