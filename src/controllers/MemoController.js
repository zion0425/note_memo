const mongoose = require("mongoose");
const memo = require("../models/memo");

var memoController = {};

// memo listView
memoController.list = function(req, res) {
  memo.find({}).exec(function(err, memos) {
    if (err) {
      console.log("error: " + err);
    } else {
      res.render("index", { title: "zion's memo", memoList: memos });
    }
  });
};

// memo insert
memoController.save = function(req, res) {
  const memolist = new memo(req.body);
  memolist.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully create an memo");
    }
  });
};

module.exports = memoController;
/* db insert test code
//testSchema 선언
const testSchema = new mongoose.Schema({
  name: String
});


//testModel 선언
const testModel = mongoose.model("testModel", testSchema);

var testInstance = new testModel({ name: "testInstance" });
console.log(testInstance);

testInstance.save(function(err, testInstance) {
  if (err) return console.error(err);
  console.log(testInstance.name);
});
*/
