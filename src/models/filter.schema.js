const mongoose = require('mongoose');

const FilterScheme = new mongoose.Schema({
    startId: {type: Int32Array, minimum: 1, maximum: 20},
    endId: {type: Int32Array, minimum: 1, maximum: 20}
});

module.exports = mongoose.model('filter', FilterScheme);