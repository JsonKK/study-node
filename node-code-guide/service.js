var express = require("express");
var app = express();

app.use(express.static(__dirname + "/views"));

app.listen(3999,function()
{
console.log("Server started on Port 3999"); 
});