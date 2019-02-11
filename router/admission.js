var express = require("express");
var router  = express.Router();
var con = require("../db/connection");
var multer = require("multer");
var maxSize = 50 * 1024 * 1024;


var date = (new Date()).getFullYear();

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './upload');
  },
  filename: function (req, file, callback) {
    callback(null, date +'-' + file.originalname );
  }
});
var upload = multer({
  storage : storage , 
  limits: {fileSize : maxSize}
       });



router.get("/admission-process", function(req, res) {
  
    res.render("admission-process" , {date : date});
  });
  
router.post("/admission-process", upload.any() ,  function(req , res)
{ 
    console.log(req.files);

    // still DB to be done

    res.render("admission-process" , {date : date});

});

  module.exports = router;