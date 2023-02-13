const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    loginDate: {type: Date, default: Date.now()},
})

const Users = mongoose.model('Users', schema);

module.exports = Users;                                                              