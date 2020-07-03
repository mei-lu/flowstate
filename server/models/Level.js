const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    currentLevel: { type: Number },
    currentExp: { type: Number },
    fullExp: { type: Number },
});

module.exports = mongoose.model(LevelSchema);