var http = require('http')

var server = http.createServer(function(req,res){

    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Default page")
        res.end();
    }else if(req.url == '/student'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Student page")
        res.end();
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Admin page")
        res.end();
    }

}).listen(3000)