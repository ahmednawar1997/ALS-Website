const router = require("express").Router();

router.get("/academics", function(req, res) {
  res.render("academics");
});

module.exports = {
  name: "binder",
  executer: function(app) {
    app.use("/", router);
  }
};
