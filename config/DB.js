const mysql = require('mysql2/promise.js');

const config = {
  "host": "localhost",
  "port": 3306,
  "user": "root",
  "password": "ds123456789",
  "database": "js",
  "connectionLimit": 30
};


const pool = mysql.createPool(config);

module.exports = pool;