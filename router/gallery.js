const router = require("express").Router();

router.get("/gallery", function(req, res) {
  res.render("gallery");
});

module.exports = {
  name: "binder",
  executer: function(app) {
    app.use("/", router);
  }
};
