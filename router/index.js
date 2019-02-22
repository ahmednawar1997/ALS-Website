var express = require("express");
var router = express.Router();
var con = require("../db/connection");
var upload = require('../helpers/multerConfig');

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/jobs", function (req, res) {
  let sql = "SELECT * FROM Jobs"
  con.query(sql, function (err, jobs) {
    if (err) console.log(err);
    res.render("jobs", {
      jobs: jobs
    });
  });
});

router.get("/jobs/:id", function (req, res) {
  let sql = "SELECT * FROM Jobs where ID = ?"
  con.query(sql, [req.params.id], function (err, jobs) {
    if (err) console.log(err);
    res.render("viewJob", {
      job: jobs[0]
    });
  });
});

router.post("/jobs/apply/:jobId", upload.any(), function (req, res) {
  let sql = "  INSERT INTO Applicants (Name, Email, Phone, CV, JobID) VALUES (?, ?, ?, ?, ?)"
  con.query(sql, [req.body.name, req.body.email, req.body.phone, req.files[0].path, req.params.jobId], function (err, insertedApplicant) {
    if (err) console.log(err);
    res.redirect('/jobs');
  });
});

router.get("/overview", function (req, res) {
  res.render("overview");
});


router.get("/news", function (req, res) {
  let sql = "SELECT * FROM News"
  con.query(sql, function (err, news) {
    if (err) console.log(err);
    res.render("news", {
      news: news
    });
  });
});

router.get("/news/:id", function (req, res) {
  let sql = "SELECT * FROM News where ID = ?"
  con.query(sql, [req.params.id], function (err, news) {
    if (err) console.log(err);
    res.render("viewNews", {
      news: news[0]
    });
  });
});

module.exports = router;