var express = require("express");

var articleController = require("../controllers/articleController");

var router = new express.Router();

router.get("/articles/:id?", articleController.index);

// Create a new article using data passed in req.body
router.post("/articles", articleController.create);

// Update an existing article with a specified id param, using data in req.body
router.patch("/articles/:id", articleController.update);

// Delete a specific article using the id in req.params.id
router.delete("/articles/:id", articleController.destroy);

module.exports = router;
