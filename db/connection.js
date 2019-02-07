var mysql = require("mysql");

var con = mysql.createConnection({
  host: "tempals.com",
  user: "tempalsc_team",
  password: "root123",
  database: "tempalsc_ALS",
  port: 3306
});
con.connect(function (err) {
  if (err) {
    console.log("Error connecting to database ! \n"+err);
    return;
  }
  else
  {
      console.log("Database successfully connected");
  }
});

module.exports = con;