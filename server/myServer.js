var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var router = require('./routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/", router);


app.set("port", (process.env.PORT || 3030));


app.use(express.static(__dirname + "/../client"));


app.listen(app.get("port"));

console.log("Listening on port " + app.get("port"));