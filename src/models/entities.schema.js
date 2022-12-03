const mongoose = require('mongoose');

const EntitiesScheme = new mongoose.Schema({
    entityId: {type: Int32Array},
    name: {type: String, required: true},
    identificationNumber: {type: String, required: true},
    expirationDate: {type: String, required: true},
    contactName: {type: String, required: true},
    contactEmail: {type: String, required: true},
    logo: {type: String},
});

module.exports = mongoose.model('entities', EntitiesScheme);