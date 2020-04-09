const mysql = require('mysql');

console.dir(process.env)

const pool = mysql.createPool(process.env.DATABASE_URL);

module.exports = pool;
