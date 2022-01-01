
var http = require('http')
var url = require('url')
var querystring = require('querystring')

var server = http.createServer(function(req,res){

    var query = url.parse(req.url).query;
    var uname = querystring.parse(query)["uname"] 
    var lname = querystring.parse(query)["lname"] 

    console.log("Full Name : " + uname +" " + lname)

}).listen(3000)