var express = require("express");
var router  = express.Router();


router.get("/admission-process", function(req, res) {
    res.render("admission-process");
  });
  
  module.exports = router;