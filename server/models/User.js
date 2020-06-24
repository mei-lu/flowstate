const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, min: 6, max: 15 },
    name: { type: String, required: true, max: 20 },
    email: { type: String, required: true, max: 64 },
    password: { type: String, required: true, max: 2000 },    
});

module.exports = mongoose.model('User', userSchema);