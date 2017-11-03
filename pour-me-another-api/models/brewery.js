var mongoose = require('mongoose');

// Brewery Schema
var brewerySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
});

var Brewery = module.exports = mongoose.model('Brewery', brewerySchema);

module.exports.getBreweries = function(callback, limit) {
    Brewery.find(callback).limit(limit);
}

module.exports.getBreweryById = function(id, callback) {
    Brewery.findById(id, callback);
}

module.exports.addBrewery = function(brewery, callback) {
    Brewery.create(brewery, callback);
}

module.exports.updateBrewery = function(id, brewery, options, callback) {
    var query = {_id: id};

    var update = {
        name: brewery.name,
        city: brewery.city,
        state: brewery.state,
        country: brewery.country
    }

    Brewery.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeBrewery = function(id, callback) {
    var query = {_id: id};

    Brewery.remove(query, callback);
}