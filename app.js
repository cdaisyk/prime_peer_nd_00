var http = require('http');
var combine = require('./combine.js');

var server = http.createServer(function(request, response) {
	response.writeHead(200);
	response.write(combine.accountBalance());
	response.write(combine.combine());
	response.end(); 
});
server.listen(3000);