var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/PourMeAnother');
var db = mongoose.connection;


// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods" , "GET, PUT, POST, DELETE, OPTIONS")
  next();
});

// Root
app.get('/', function(req, res) {
    res.send('Hello World!');
});

/*******************************
* Brewery Routes
*******************************/
Brewery = require('./models/brewery');

app.get('/api/breweries', function(req, res) {
    Brewery.getBreweries(function(err, breweries){
        if(err) {
            throw err;
        }

        res.json(breweries);
    });
});

app.get('/api/breweries/:_id', function(req, res) {
    const _id = req.params._id;

    Brewery.getBreweryById(_id, function(err, brewery){
        if(err) {
            throw err;
        }

        res.json(brewery);
    });
});

app.post('/api/breweries', function(req, res) {
    const brewery = req.body;

    Brewery.addBrewery(brewery, function(err, brewery){
        if(err) {
            throw err;
        }

        res.json(brewery);
    });
});

app.put('/api/breweries/:_id', function(req, res) {
    const brewery = req.body;
    const id = req.params._id;

    Brewery.updateBrewery(id, brewery, {new: true}, function(err, brewery){
        if(err) {
            throw err;
        }

        res.json(brewery);
    });
});

app.delete('/api/breweries/:_id', function(req, res) {
    const _id = req.params._id;

    Brewery.removeBrewery(_id, function(err, brewery){
        if(err) {
            throw err;
        }

        res.json(brewery);
    });
});

/*******************************
* Beer Routes
*******************************/
Beer = require('./models/beer');

app.get('/api/beers', function(req, res) {
    Beer.getBeers(function(err, beers){
        if(err) {
            throw err;
        }

        res.json(beers);
    });
});

app.get('/api/beers/:_id', function(req, res) {
    const _id = req.params._id;

    Beer.getBeerById(_id, function(err, beer){
        if(err) {
            throw err;
        }

        res.json(beer);
    });
});

app.post('/api/beers', function(req, res) {
    const beer = req.body;

    Beer.addBeer(beer, function(err, beer){
        if(err) {
            throw err;
        }

        res.json(beer);
    });
});

app.put('/api/beers/:_id', function(req, res) {
    const beer = req.body;
    const id = req.params._id;

    Beer.updateBeer(id, beer, {new: true}, function(err, beer){
        if(err) {
            throw err;
        }

        res.json(beer);
    });
});

app.delete('/api/beers/:_id', function(req, res) {
    const _id = req.params._id;

    Beer.removeBeer(_id, function(err, beer){
        if(err) {
            throw err;
        }

        res.json(beer);
    });
});


// Set Up Server
app.listen(3000, function(){
    console.log('pour-me-another-api listening on port 3000...');
});