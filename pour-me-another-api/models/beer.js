var mongoose = require('mongoose');

// Beer Schema
var beerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    brewery: {
        type: String,
        required: true
    },
    abv: {
        type: Number
    },
    look: {
        type: String
    },
    smell: {
        type: String
    },
    feel: {
        type: String
    },
    taste: {
        type: String
    },
    overall: {
        type: String
    },
    notes: {
        type: String
    },
    price: {
        type: Number,
        min: 0,
        max: 5
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }
});

var Beer = module.exports = mongoose.model('Beer', beerSchema);

module.exports.getBeers = function(callback, limit) {
    Beer.find(callback).limit(limit);
}

module.exports.getBeerById = function(id, callback) {
    Beer.findById(id, callback);
}

module.exports.addBeer = function(beer, callback) {
    Beer.create(beer, callback);
}

module.exports.updateBeer = function(id, beer, options, callback) {
    var query = {_id: id};

    var update = {
        name: beer.name,
        style: beer.style,
        brewery: beer.brewery,
        abv: beer.abv,
        look: beer.look,
        smell: beer.smell,
        feel: beer.feel,
        taste: beer.taste,
        overall: beer.overall,
        notes: beer.notes,
        price: beer.price,
        rating: beer.rating
    }

    Beer.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeBeer = function(id, callback) {
    var query = {_id: id};

    Beer.remove(query, callback);
}