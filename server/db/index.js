/**
 * description: create db mysql with named school
 */
async function connect() {
  var mysql = require("mysql");

  // create connection to mysql
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });

  // try to connect throw error if cannot connect
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  //query to create the database which we will add the tables to
  connection.query(
    "CREATE DATABASE school CHARACTER SET utf8 COLLATE utf8_general_ci",
    function(err, result) {
      if (err) console.log("Database exists!");
      else console.log("Database created!");
    }
  );
}

module.exports = connect;
