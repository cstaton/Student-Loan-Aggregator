var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var morgan = require("morgan")

app.set("port", (process.env.PORT || 3030));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + "/client"));

app.listen(app.get("port"));

console.log("Listening on port " + app.get("port"));