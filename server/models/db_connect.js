require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PSWD,
  database: process.env.MYSQL_DB
});

con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("CREATE  DATABASE IF NOT EXISTS cs", function(err, result) {
        if (err) throw err;
        console.log("Database created!");
    });
  });

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
      con.query(sql, binding, (err, result, fields) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };

const createQuery = "CREATE DATABASE IF NOT EXISTS heroku_454ebba218b9a28;";
con.query(createQuery);

module.exports = { con, query };