var mysql = require("mysql");

var con = mysql.createPool({
  host: "167.99.46.128",
  user: "root",
  password: "PASSWORD", // you need to add password to login to DB or use local
  database: "ALS",
  port: 3306
});

con.getConnection(function(err,connection){
  if(err) throw err;
  else{
    console.log("Database connected successfullly");
  }

  connection.release();

})

module.exports = con;
