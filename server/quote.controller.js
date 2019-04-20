const Quote = require('./quote.model.js');

// Create new quote
exports.create = (req, res) => {
    // Request validation
    if (!req.body) {
        return res.status(400).send({
            message: "Quote content can not be empty"
        });
    }

    // Create a quote
    const quote = new Quote({
        author: req.body.author,
        text: req.body.text,
        img: req.body.img
    });

    quote.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating a quote"
        });
    });
};

// Retrieve all quotes from the database.
exports.findAll = (req, res) => {
    Quote.find()
    .then(quotes => {
        res.send(quotes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving quotes."
        });
    });
};