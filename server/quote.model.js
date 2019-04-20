const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    author: String,
    text: String,
    img: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Quotes', QuoteSchema);