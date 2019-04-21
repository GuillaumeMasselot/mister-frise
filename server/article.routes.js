module.exports = (app) => {
    const articles = require('./article.controller.js');

    // Create a new articles
    app.post('/articles', articles.create);

    // Retrieve all articles
    app.get('/articles', articles.findAll);

    // Retrieve a single Product with productId
    app.get('/articles/:articleId', articles.findOne);
}