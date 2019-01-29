var express = require("express");
var router  = express.Router();

router.get("/gallery", function(req, res) {
    res.render("gallery");
  });

  module.exports = router;