const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    createdon: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', userSchema);