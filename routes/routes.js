let express = require("express");
let path = require("path");

let apiRoutes = require("./apiRoutes");

let router = new express.Router();

router.use("/api", apiRoutes);

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;
