module.exports = (app) => {
    const quotes = require('./quote.controller.js');

    // Create a new Quotes
    app.post('/quotes', quotes.create);

    // Retrieve all Quotes
    app.get('/quotes', quotes.findAll);
}