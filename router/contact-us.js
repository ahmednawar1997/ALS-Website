var express = require("express");
var router  = express.Router();
var bodyParser = require("body-parser");


router.get("/contact-us", function(req, res) {
    res.render("contact-us");
  });

router.post("/contact-us" , function(req,res){
      console.log("You hit Post request");
      console.log(req.body);
      res.render("contact-us");
});

  module.exports = router;