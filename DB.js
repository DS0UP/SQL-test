const mysql = require('mysql2');

const config = {
  "host": "localhost",
  "port": 3306,
  "user": "root",
  "password": "dsWppt1985**",
  "database": "js",
  "connectionLimit": 30
};


const pool = mysql.createPool(config);

module.exports = (callback) => {
    pool.getConnection((err, conn) => {
        if(!err) {
            callback(conn);
            console.log("데이터베이스 연결 성공");
        } else {
            console.log(err);
        }
    });
};