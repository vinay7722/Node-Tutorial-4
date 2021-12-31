var http = require('http')

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("Hello")
	res.end();
}).listen(3000);

console.log("server is running")