var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ALS",
  port: 3306
});
con.connect(function (err) {
  if (err) {
    console.log("Error connecting to database ! \n" + err);
    return;
  }
  else {
    console.log("Database successfully connected");
  }
});

module.exports = con;