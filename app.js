// Requiring Packages - Start
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
// Requiring Packages - End

// configure app
const app = express(); // define our app using express

app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // For parsing URL encoded Data
app.use(bodyParser.json()); // Pars to json object

(app = express()), app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

// Website Routes
// TBD - Use app.use insted and module exports to seperate  routes
app.get("/", function(req, res) {
  res.render("index");
});
app.get("/contact-us", function(req, res) {
  res.render("contact-us");
});
app.get("/academics", function(req, res) {
  res.render("academics");
});
app.get("/gallery", function(req, res) {
  res.render("gallery");
});
app.get("/template", function(req, res) {
  res.render("template");
});
app.get("/admission-process", function(req, res) {
  res.render("admission-process");
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
module.exports = app;
