var express = require("express");
var router  = express.Router();
var con = require("../db/connection");
var multer = require("multer");
var maxSize = 50 * 1024 * 1024;


var date = (new Date()).getFullYear();

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './upload/admissions');
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
    

    var query = "INSERT INTO Admission (ChildName, DateOfBirth, Age, NumberOfSiblings, Gender, GuardianFullName, Occupation, Nationality, "+
      "Address, Profession, UniversityDegree, PhoneNumber, Email, FatherID, UniversityCertificate, GrandFatherName, GrandFatherProfession, GrandFatherAddress)" + 
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    
      var data = [req.body.childname , req.body.dob , req.body.age ,req.body.siblings , req.body.gridRadios , req.body.parent , req.body.occupation , req.body.nationality , req.body.address , req.body.profession , req.body.university , req.body.phone , req.body.email , req.files[0].path , req.files[1].path , req.body.grandName , req.body.grandProfession , req.body.grandAdrress ];
    
    con.query(query , data ,  function(err , data)
    {
      if(err) console.log(err);
      console.log(data);
    });

    
    res.render("admission-process" , {date : date});

});

  module.exports = router;