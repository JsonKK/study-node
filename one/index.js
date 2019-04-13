require('colors');
console.log('smashing node'.rainbow);

var net = require('net');
net.createServer(function(connection){
	connection.on('error',function(err){
		console.log('error message');
	});
}).listen(4000);

var fs = require();