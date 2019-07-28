// get dependencies
const yaml = require('js-yaml');
const fs = require('fs');
const Quote = require('./server/quote.model');
require('dotenv').config();

// Configuring the database
const config = require('./server/config.js');
const mongoose = require('mongoose');
const path = require("path");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
    
    // Get document, or throw exception on error
    const quotesDir = path.join(__dirname, 'citations');
    fs.readdir(quotesDir, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        
        const EXTENSION = '.yml';
        files.filter(file => path.extname(file).toLowerCase() === EXTENSION).forEach(file => {
            try {
                var doc = yaml.safeLoad(fs.readFileSync(`${quotesDir}/${file}`, 'utf8'));
                doc.quotes.forEach(data => {
                    const q = data.quote;
                    const quote = new Quote({
                        _id: `${q.author}-${q.text}`,
                        author: q.author,
                        text: q.text,
                        img: q.img
                    });
    
                    Quote.findByIdAndUpdate(
                        quote._id, 
                        quote,
                        { new: true },
                        (err, todo) => {
                            // Handle any possible database errors
                            if (err) console.log(`Erreur update ${quote._id}`);
                            if (!todo) {
                                quote.save( (err, quote) => {
                                    if (err) console.log(`Erreur création de la citation ${quote._id}`, err);
                                    console.log(`Nouvelle citation créé ${quote._id}`);
                                });
                            } else {
                                console.log(`Update citation ${quote._id}`);
                            }
                        }
                    );
                })
                
            } catch (e) {
                console.log("error", e);
            }
        });
    });
    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});