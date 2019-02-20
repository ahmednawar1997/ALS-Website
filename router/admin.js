var express = require("express");
var router = express.Router();
var con = require("../db/connection");

router.get("/admin", (req, res) => {
    var query = "SELECT * FROM Jobs ";
    con.query(query, [], (err, jobs) => {
        if (err) console.log("ERROR", err);
        res.render("admin", { jobs });
        console.log("JOBSS", jobs)
    })
});

router.post("/admin/new-article", (req, res) => {
    var query = "INSERT INTO News (Title, Text, Date) " +
        "VALUES (?,?,?)";
    var data = [req.body.articleTitle, req.body.articleText, new Date()];
    con.query(query, data, (err) => {
        if (err) console.log("ERROR", err);
    });
    res.render("admin");
});

router.post("/admin/new-job", (req, res) => {
    var query = "INSERT INTO Jobs (JobTitle, Description, Requirements, JobPostDate, EndDate) " +
        "VALUES (?,?,?,?,?)";
    var data = [req.body.jobTitle, req.body.jobDescription, req.body.jobRequirements, req.body.jobStartDate, req.body.jobEndDate];
    con.query(query, data, (err) => {
        if (err) console.log("ERROR", err);
    });
    res.render("admin");
});




module.exports = router;