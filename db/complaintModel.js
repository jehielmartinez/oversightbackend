const mongoose = require('mongoose');

let complaint = new mongoose.Schema({
    type: String,
    location: {
        latitude: Number,
        longitude: Number,
        string: String
    },
    body: String,
    createdAt: Number,
    status: String
});

let complaintModel = mongoose.model('Complaint', complaint);

module.exports = {complaintModel}