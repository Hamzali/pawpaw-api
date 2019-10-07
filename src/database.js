const mongoose = require('mongoose');
mongoose.connect('mongodb://pawpaw:pawpaw123@ds331558.mlab.com:31558/pawpaw', {useNewUrlParser: true, useUnifiedTopology: true});

/**
 * Pet Schema
 * Defines how the pet data object stored int the database
 */
const Pet = mongoose.model('Pet', { 
    name: String,
    age: Number,
    species: String,
    color: String
});

module.exports = {
    Pet
};