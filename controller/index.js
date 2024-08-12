// router/index.js
const express = require("express");

// ** express router
const router = express.Router();

const phoneController = require("./phoneController");

router.use("/phone",phoneController);

// ** GET / 요청
router.get("/", (req, res) => {
  res.render("phone/savePhone.html");
});

router.post("/test", (req, res) => {
  const { id, password } = req.body; // POST로 받은 데이터 추출

  const sql = "INSERT INTO register (id, password) VALUES (?, ?)"; // SQL 쿼리 작성
  const values = [id, password]; // 쿼리에 사용할 값
  let sql2 = "select * from register"
  pool((conn) => {
    conn.query(sql, values,(err, result) => {
      if (!err) {
        console.log(result);
        
      } else {
        console.log(err);
      }
      conn.query(sql2,(err,result) => {
        res.render("phone/list.ejs", {result})
      })
    });
    conn.release();
  });
});

// ** router export
module.exports = router;