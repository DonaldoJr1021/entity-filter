const mongoose = require('mongoose');

const ErrorScheme = new mongoose.Schema({
    error: {type: String}
});

module.exports = mongoose.model('error', ErrorScheme);