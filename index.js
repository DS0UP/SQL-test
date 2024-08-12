// ** 모듈 가져오기
const express = require("express");

// ** express 모듈을 변수에 할당
const app = express();
const engine = require("ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine("html", engine.renderFile);
app.set("view engine", 'html');
app.set("views", __dirname + "/views");

// ** Server Port 설정 (3000번)
app.set("port", 3000);

const controller = require("./controller");
app.use("/", controller)

// ** 서버 구동 (위에 설정한 포트로 서버를 구동한다.)
app.listen(app.get("port"), () => {
  // 서버가 구동되면서 실행될 함수
  console.log(`Server On Port ${app.get("port")}`);
});