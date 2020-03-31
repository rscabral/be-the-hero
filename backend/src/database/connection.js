const knex = require('knex');
const configuraiton = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuraiton.test : configuraiton.development;

const connection = knex(config);

module.exports = connection;

