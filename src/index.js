const router = require("./routes/index");
const memo = require("./routes/memo");
// const mongoose = require("./models/dbcon");

const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const port = process.env.port || 8080;

// db con
const db = mongoose.connection;
const dbPass = "";
const uri =
  "mongodb+srv://" +
  dbPass +
  "@cluster-dxh6t.azure.mongodb.net/notepad?retryWrites=true&w=majority";

// mongodb connect
mongoose.connect(uri);

db.on("error", console.error);
db.once("open", function() {
  console.log("Connected to mongod server");
});

app.use(logger(":date"), function(req, res, next) {
  next();
});

const server = app.listen(port, function() {
  console.log("Express server has started on port " + port);
});

app.use(express.static(__dirname + "/public"));
