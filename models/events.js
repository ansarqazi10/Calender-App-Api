const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now()},
    allowedUsers: {type: Array, default: []},
})

const Events = mongoose.model('Events', schema);

module.exports = Events;                                                              