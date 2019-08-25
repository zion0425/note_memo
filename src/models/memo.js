const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoSchema = new Schema({
  title: String,
  content: String
});

module.exports = mongoose.model("memo", memoSchema);
