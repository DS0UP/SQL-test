// router/test.js
const express = require("express");

// ** express router
const router = express.Router();

// ** GET / 요청
router.get("/", (req, res) => {
  res.render("test/test");
});

// ** router export
module.exports = router;