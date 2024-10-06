const { text } = require('express');
const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'please enter a goal']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)