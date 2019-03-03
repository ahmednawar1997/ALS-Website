// Requiring Packages - Start
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

// Requiring Packages - End

// var DB = require("./db/connection");

// configure app
const app = express(); // define our app using express
const port = normalizePort(process.env.PORT || "7822");

app.set("port", port);

/**
 * Create HTTP server.
 */

app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // For parsing URL encoded Data
app.use(bodyParser.json()); // Parse to json object
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

// Website Routes
// Routers
require("fs")
  .readdirSync("./router")
  .map(file => {
    const routerBinder = require("./router/" + file);

    // some magic is the .stack part just to validate that the router wasnt exported
    if (routerBinder.name === "binder") {
      routerBinder.executer(app);
    } else
      throw file + " must be exported as object with name and function(app)";
  });

// template page
app.get("/template", function(req, res) {
  res.render("template");
});

// 404
// =============================================================================
app.use(function(req, res, next) {
  res.status(404).send({
    error: "404-Not found"
  });
});

// Error
// =============================================================================
app.use(function(err, _req, res, _next) {
  // TBD - for our own Error code handling
});

var server = http.createServer(app);

server.listen(40000, function() {
  console.log("Server is running...");
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
