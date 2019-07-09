var http = require('http');

var server = http.createServer(function(req,res){
    var str = '接收到服务器请求' + req.headers.host + '/请求地址' + req.url;
    console.log(str);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    res.end('<h1>'+str+'</h1>');
});

server.listen(3000,'0.0.0.0');