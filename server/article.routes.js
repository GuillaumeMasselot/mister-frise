module.exports = (app) => {
    const articles = require('./article.controller.js');

    // Create a new articles
    app.post('/addarticle', articles.create);

    // Retrieve all articles
    app.get('/getarticles', articles.findAll);

    // Retrieve a single Product with productId
    app.get('/getarticle/:articleId', articles.findOne);
}
