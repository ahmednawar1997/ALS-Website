const app = require("./app");
const connect = require("./db/index");

const hostname = "127.0.0.1";
const port = process.env.port || 3000;

app.listen(port, hostname, function() {
  console.log("server is up and running");

  //connecting to db
  connect();
});
