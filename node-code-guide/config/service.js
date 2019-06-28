var express = require("express");
var app = express();

app.use(express.static("../views")).listen(3999);