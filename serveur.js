const http = require('http');
const hostname = '127.0.0.1';
const port = 12107;

const server = http.createServer(
	function(request,response){
		response.statusCode = 200;
		response.setHeader('Content-Type','text/plain');
		response.end('Bonjour et ferme ta bouche');
	}
);

server.listen(port,hostname,function(){
	console.log('le serveur ecooute là bas http://' + hostname + " : " + port );
});