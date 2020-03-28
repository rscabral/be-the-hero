const knex = require('knex');
const configuraiton = require('../../knexfile');

const connection = knex(configuraiton.development);

module.exports = connection;

