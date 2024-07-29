// router/index.js
const express = require("express");

// ** express router
const router = express.Router();

// ** GET / 요청
router.get("/", (req, res) => {
  res.render("index");
});

// ** router export
module.exports = router;