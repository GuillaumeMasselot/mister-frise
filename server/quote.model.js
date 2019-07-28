const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    _id: String,
    author: String,
    text: String,
    img: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Quotes', QuoteSchema);