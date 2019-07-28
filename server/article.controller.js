const Article = require('./article.model.js');

// Create new article
exports.create = (req, res) => {
    console.log("req", req);
    // Request validation
    if (!req.body) {
        return res.status(400).send({
            message: "Article content can not be empty"
        });
    }

    console.log("req add", req)

    // Create a article
    const article = new Article({
        title: req.body.title,
        imgUrl: req.body.imgUrl,
        chronasUrl: req.body.chronasUrl,
        intro: req.body.intro,
        events: req.body.events,
        notes: req.body.notes,
        sources: req.body.sources,
        links: req.body.links,
        author: req.body.author,
        tags: req.body.tags,
        wip: req.body.wip
    });

    article.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating a article"
        });
    });
};

// Retrieve all articles from the database.
exports.findAll = (req, res) => {
    console.log("req", req);
    console.log("res", res);
    Article.find()
    .then(articles => {
        res.send(articles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving articles."
        });
    });
};

// Find a single article with an id
exports.findOne = (req, res) => {
    Article.findById(req.params.articleId)
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });            
        }
        res.send(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving article with id " + req.params.articleId
        });
    });
};