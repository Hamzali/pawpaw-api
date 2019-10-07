const db = require('./database');

/**
 * Reads all the pets in the database.
 */
const read = () => db.Pet.find({});
/**
 * Creates a pet in the database with given parameters.
 * @param {string} name 
 * @param {number} age 
 * @param {string} color 
 * @param {string} species 
 */
const create = (name, age, color, species) => 
    db.Pet.create({name, age, color, species});

// TODO: implement create and update methods of the pet service.
const remove = () => {};
const update = () => {};

module.exports = {
    create,
    read,
};