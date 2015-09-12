var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan")

var app = express();

var db = require("./controllers");
var router = require("./routes.js");

app.set("port", (process.env.PORT || 3030));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + "/../client"));


app.listen(app.get("port"));

console.log("Listening on port " + app.get("port"));