// router/asdf.js
const express = require("express");

// ** express router
const router = express.Router();

// ** GET / 요청
router.get("/", (req, res) => {
  res.send("asdf 테스트 입니다.");
});

// ** router export
module.exports = router;