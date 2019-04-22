module.exports = (app) => {
    const quotes = require('./quote.controller.js');

    // Create a new Quotes
    app.post('/addquote', quotes.create);

    // Retrieve all Quotes
    app.get('/getquotes', quotes.findAll);
}