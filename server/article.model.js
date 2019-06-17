const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    start: String,
    end: String,
    dateLabel: String,
    title: String,
    subtitle: String,
    img: String,
    details: String
});

const ArticleSchema = mongoose.Schema({
    title: String,
    imgUrl: String,
    chronasUrl: String,
    intro: String,
    notes: [String],
    sources: [String],
    links: [String],
    author: String,
    tags: [String],
    events: [EventSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Articles', ArticleSchema);