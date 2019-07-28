const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    start: String,
    end: String,
    dateLabel: String,
    title: String,
    subtitle: String,
    img: String,
    details: String,
    group: String
}, { _id: false});

const ArticleSchema = mongoose.Schema({
    _id: String,
    wip: Boolean,
    title: String,
    imgUrl: String,
    chronasUrl: String,
    intro: String,
    notes: [String],
    sources: [String],
    links: [String],
    author: String,
    tags: [String],
    events: [EventSchema],
    updatedAt: String,
    createdAt: String
}, {
    timestamps: true,
    _id: false
});

module.exports = mongoose.model('Articles', ArticleSchema);