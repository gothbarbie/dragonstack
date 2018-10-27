const { Pool } = require('pg')

// Note, this file is not in repository, contact admin for credentials
const databaseConfiguration = require('./secrets/databaseConfiguration')

const pool = new Pool(databaseConfiguration)

module.exports = pool
