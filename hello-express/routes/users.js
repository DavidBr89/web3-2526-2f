const express = require("express");
const router = express.Router();

/* GET users listing. */
// /users/
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// GET /users/details -> User details
router.get("/details", (req, res) => {
  res.send("User details met extra info");
  // res.send("Another details");
});

module.exports = router;
