const router = require("express").Router();
var bodyParser = require("body-parser");
var con = require("../db/connection");

router.get("/contact-us", function(req, res) {
  res.render("contact-us");
});

router.post("/contact-us", function(req, res) {
  var query =
    "INSERT INTO ContactUs ( ParentName, ChildName, Nationality, PhoneNumber, Email, Message) VALUES (?,?,?,?,?,?)";

  con.query(
    query,
    [
      req.body.name,
      req.body.cname,
      req.body.nationality,
      req.body.phone,
      req.body.email,
      req.body.message
    ],
    function(err, data) {
      if (err) console.log(err);
      console.log(data);
    }
  );
  res.render("contact-us");
});

module.exports = {
  name: "binder",
  executer: function(app) {
    app.use("/", router);
  }
};
