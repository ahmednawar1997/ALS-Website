var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser");
    const http = require("http");
    const hostname = '127.0.0.1';
    const port = 3000;

    app.set("view engine","ejs");
    app.use(express.static(__dirname+"/"));

    app.get("/",function(req , res){
        res.render("index"); 
     });
     app.get("/contact-us",function(req , res){
        res.render("contact-us"); 
     });
     app.get("/academics",function(req , res){
        res.render("academics"); 
     });
     app.get("/gallery",function(req , res){
        res.render("gallery"); 
     });
     app.get("/template",function(req , res){
        res.render("template"); 
     });
     app.get("/admission-process",function(req , res){
        res.render("admission-process"); 
     });

     app.listen(port,hostname, function()
     {
         console.log("server is up and running");
     });
     
     
    
    