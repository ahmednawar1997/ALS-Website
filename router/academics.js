var express = require("express");
var router  = express.Router();


router.get("/academics", function(req, res) {
    res.render("academics");
  });

  module.exports = router;