var mysql = require("mysql");
var db = mysql.createConnection({
  host: "116.43.79.39",
  user: "minuklaptop",
  port: 3306,
  password: "alsdnr12",
  database: "opentutorials",
});

db.connect();

module.exports = db;
