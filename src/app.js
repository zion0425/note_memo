const express = require("Express");

const socket = require("socket-io");

const http = require("http");

const app = express();

const server = http.createServer(app);

const io = socket(server);

app.get("/", function(request, response) {
  console.log("유저가 / 경로로 접근함.");
  response.send("Hello, Express Server!!");
});

server.listen(8080, function() {
  console.log("서버 실행중");
});
