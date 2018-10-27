const { Pool } = require('pg')

// Note, this file is not in repository, contact admin for credentials
const databaseConfiguration = require('./secrets/databaseConfiguration')

const pool = new Pool(databaseConfiguration)

module.exports = pool

// Un-comment and run file to test database connection
// pool.query('SELECT * FROM generation', (error, response) => {
//   if (error) return console.error('error', error)

//   console.log('response', response.rows)
// })
