const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//how the data is going to look
const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
        timestamp: true,
    });

// how we reference this data when creating exercise
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

