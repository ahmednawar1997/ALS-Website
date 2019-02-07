// Requiring Packages - Start
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const port = 3000;
const hostname = '127.0.0.1';
// Requiring Packages - End


// var DB = require("./db/connection");

// configure app
const app = express(); // define our app using express

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
app.use(require("./router/index"));
app.use(require("./router/academics"));
app.use(require("./router/admission"));
app.use(require("./router/gallery"));
app.use(require("./router/contact-us"));


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


app.listen(port ,hostname)
{
  console.log("Server is up and running");
}
