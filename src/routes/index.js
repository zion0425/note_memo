const express = require("express");
const router = express.Router();

const memo = require("../controllers/MemoController");

// get home page
router.get("/", function(req, res) {
  memo.list(req, res);
});

router.get("/write", function(req, res, next) {
  res.render("write");
});

router.post("/insert", function(req, res) {
  memo.save(req, res);
});

router.get("/list", function(req, res) {
  memo.list(req, res);
});

module.exports = router;

/* 로그를 남기기 위해 한 미련한 행동 ㅎ;
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

// web timelog
router.use(function timeLog(req, res, next) {
  console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
  next();
});
*/
