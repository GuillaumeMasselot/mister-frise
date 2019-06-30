// get dependencies
const yaml = require('js-yaml');
const fs = require('fs');
const Article = require('./server/article.model');
require('dotenv').config();

// Configuring the database
const config = require('./server/config.js');
const mongoose = require('mongoose');
const path = require("path");

mongoose.Promise = global.Promise;

const slug = function(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  
    return str;
};

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
    
    // Get document, or throw exception on error
    const articlesDir = path.join(__dirname, 'articles');
    fs.readdir(articlesDir, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        
        const EXTENSION = '.yml';
        files.filter((file) => path.extname(file).toLowerCase() === EXTENSION).forEach((file) => {
            try {
                var doc = yaml.safeLoad(fs.readFileSync(`${articlesDir}/${file}`, 'utf8'));
                let formatedEvents = doc.events.map(e => e.event);
                const article = new Article({
                    _id: slug(doc.title),
                    title: doc.title,
                    imgUrl: doc.imgUrl,
                    chronasUrl: doc.chronasUrl,
                    intro: doc.intro,
                    events: formatedEvents,
                    notes: doc.notes,
                    sources: doc.sources,
                    links: doc.links,
                    author: doc.author,
                    tags: doc.tags
                });

                Article.findByIdAndUpdate(
                    article._id, 
                    article,
                    {new: true},
                    (err, todo) => {
                        // Handle any possible database errors
                        if (err) console.log(`Erreur update ${article._id}`);
                        if (!todo) {
                            article.save( (err, article) => {
                                console.log(`Erreur création de l'article ${article._id}`, err);
                                console.log(`Nouvel article créé ${article._id}`);
                            });
                        } else {
                            console.log(`Update article ${article._id}`);
                        }
                    }
                );
            } catch (e) {
                console.log("error", e);
            } 
        });
    });
    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});