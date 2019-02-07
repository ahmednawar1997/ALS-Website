var express = require("express");
var router  = express.Router();


router.get("/admission-process", function(req, res) {
  var date = (new Date()).getFullYear();
    res.render("admission-process" , {date : date});
  });
  
  module.exports = router;