var express = require("express");
var router = express.Router();
var con = require("../db/connection");


router.get("/", function (req, res) {
  res.render("index");
});


router.get("/jobs", function (req, res) {
  res.render("jobs");
});

router.get("/jobs/:id", function (req, res) {
  console.log(req.params.id);
  //go fetch the job with this id and render the job page
  let sql = "SELECT * FROM Jobs where ID = ?"
  con.query(sql, [req.params.id], function (err, jobs) {
    if (err) console.log(err);
    res.render("viewJob",{ jobs: jobs });
  });

});


module.exports = router;