const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, max: 20 },
    email: { type: String, required: true, max: 64 },
    password: { type: String, required: true, max: 100 },    
});

module.exports = mongoose.model('User', userSchema);