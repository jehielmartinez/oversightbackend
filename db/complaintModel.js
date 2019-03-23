const mongoose = require('mongoose');

let complaintSchema = new mongoose.Schema({
    complaintType: String,
    location: {
        latitude: Number,
        longitude: Number,
        string: String
    },
    body: String,
    createdAt: String,
    status: String
});

let complaint = mongoose.model('complaint', complaintSchema);

module.exports = {complaint}