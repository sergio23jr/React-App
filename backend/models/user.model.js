const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//how the data is going to look
const userSchema = new Schema({
    username: {
        type: String, required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
        timestamp: true,
    });

// how we reference this data when creating user
const User = mongoose.model('User', userSchema);

module.exports = User;

