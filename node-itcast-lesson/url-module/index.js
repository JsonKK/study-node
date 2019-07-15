var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var number = queryObj.number;
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end('服务器接收到的消息是：姓名-'+name+';年龄-'+age+';学号-'+number);
});

server.listen(3000,'0.0.0.0',function(err,data){
    console.log('运行启动3000')
});