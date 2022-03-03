const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});


const items = mongoose.model('Items', itemSchema);

module.exports = items;