var http = require('http');
var uc = require('upper-case');
http.createServer(function(req,res){
	fs.readFile('client.html',function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(uc.uppercase("Wish you all success"));
		res.end();
}).listen(8080);