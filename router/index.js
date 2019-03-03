const router = require("express").Router();
var con = require("../db/connection");
var upload = require("../helpers/multerConfig");

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/activity", function(req, res) {
  res.render("activityList");
});
router.get("/drive", function(req, res) {
  res.render("drive");
});
router.get("/survey", function(req, res) {
  res.render("survey");
});
router.post("/survey", function(req, res) {
  res.render("survey");
});

router.get("/activity/:id", function(req, res) {
  res.render("activityView");
});

router.get("/jobs", function(req, res) {
  let sql = "SELECT * FROM Jobs";
  con.query(sql, function(err, jobs) {
    if (err) console.log(err);
    res.render("jobs", {
      jobs: jobs
    });
  });
});

router.get("/jobs/:id", function(req, res) {
  let sql = "SELECT * FROM Jobs where ID = ?";
  con.query(sql, [req.params.id], function(err, jobs) {
    if (err) console.log(err);
    res.render("viewJob", {
      job: jobs[0]
    });
  });
});

router.post("/jobs/apply/:jobId", upload.any(), function(req, res) {
  let sql =
    "  INSERT INTO Applicants (Name, Email, Phone, CV, JobID) VALUES (?, ?, ?, ?, ?)";
  con.query(
    sql,
    [
      req.body.name,
      req.body.email,
      req.body.phone,
      req.files[0].path,
      req.params.jobId
    ],
    function(err, insertedApplicant) {
      if (err) console.log(err);
      res.redirect("/jobs");
    }
  );
});

router.get("/overview", function(req, res) {
  res.render("overview");
});

router.get("/news", function(req, res) {
  let sql = "SELECT * FROM News";
  con.query(sql, function(err, news) {
    if (err) console.log(err);
    res.render("news", {
      news: news
    });
  });
});

router.get("/news/:id", function(req, res) {
  let sql = "SELECT * FROM News where ID = ?";
  con.query(sql, [req.params.id], function(err, news) {
    if (err) console.log(err);
    res.render("viewNews", {
      news: news[0]
    });
  });
});

router.get("/complaints", function(req, res) {
  res.render("complaints");
});

router.post("/complaints", function(req, res) {
  const sql =
    "INSERT INTO Complaints (StudentFullName, PhoneNumber, email, Department, Grade, Subject, Message) VALUES (?,?,?,?,?,?,?)";
  const inputData = [
    req.body.fullName,
    req.body.phoneNumber,
    req.body.email,
    req.body.department,
    req.body.grade,
    req.body.typeOfComplaint,
    req.body.message
  ];

  con.query(sql, inputData, function(err, data) {
    if (err) console.log(err);
    console.log(data);
    res.render("complaints");
  });
});

router.get("/resource", function(req, res) {
  res.render("resource");
});

router.get("/sloped", function(req, res) {
  res.render("slopedNav");
});

module.exports = {
  name: "binder",
  executer: function(app) {
    app.use("/", router);
  }
};
