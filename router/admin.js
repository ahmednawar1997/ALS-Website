var express = require("express");
var router = express.Router();
var con = require("../db/connection");

router.get("/admin", (req, res) => {
    var query = "SELECT * FROM applicants, jobs " +
        "WHERE applicants.JobID = jobs.ID";
    con.query(query, [], (err, jobInfo) => {
        if (err) console.log("ERROR", err);
        res.render("admin", jobInfo);
    })
});

router.post("/admin/new-article", (req, res) => {
    var query = "INSERT INTO news (Title, Text, Date) " +
        "VALUES (?,?,?)";
    var data = [req.body.articleTitle, req.body.text, new Date()];
    con.query(query, data, (err) => {
        if (err) console.log("ERROR", err);
    });
});

router.post("/admin/new-job", (req, res) => {
    var query = "INSERT INTO jobs (JobTitle, Description, JobPostDate, EndDate) " +
        "VALUES (?,?,?,?)";
    var data = [req.body.jobTitle, req.body.jobDescription, req.body.jobStartDate, req.body.jobEndDate];
    con.query(query, data, (err) => {
        if (err) console.log("ERROR", err);
    });
});




module.exports = router;