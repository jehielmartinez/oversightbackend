const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    },
    admin:{
        type: Boolean,
        default: false,
        required: true
    },
    avatar:{
        type: Buffer,
        select: false
    },
    community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
    },
    communityPasscode:{
        type: String
    },
    createdAt:{
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
})

userSchema.virtual('publications', {
    ref: 'Publication',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, process.env.SECREAT) //Replace for a ENV Variable

    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

userSchema.methods.toJSON = function () {
    const user = this
    const userProfile = user.toObject()

    delete userProfile.password
    delete userProfile.tokens

    return userProfile
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to Login!')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to Login!')
    }

    return user
}

//Hash Password Middleware
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next()
});

const User = mongoose.model('User', userSchema);

module.exports = {User}