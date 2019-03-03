var mysql = require("mysql");

var con = mysql.createConnection({
  host: "167.99.46.128",
  user: "root",
  password: "", // you need to add password to login to DB or use local
  database: "ALS",
  port: 3306
});
con.connect(function(err) {
  if (err) {
    console.log("Error connecting to database ! \n" + err);
    return;
  } else {
    console.log("Database successfully connected");
  }
});

module.exports = con;
