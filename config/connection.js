const { Pool } = require('pg')

require('dotenv').config();

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASS,
  port: 5432,
  host: 'localhost',
})

module.exports = pool;