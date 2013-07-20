var express = require('express');
var fs = require("fs");
var buffer = new Buffer(fs.readFileSync("index.html"));

var app = express.createServer(express.logger());

app.configure(function() {
  app.use(express.static(__dirname+"/assets"));
});

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
