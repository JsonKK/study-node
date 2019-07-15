var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req,res){
    //不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
    var pathName = url.parse(req.url).pathname;
    if(pathName == '/'){
        pathName = '/index.html';
    }
    fs.readFile(__dirname+'/src'+pathName,function(err,data){
        if(err){
            // fs.readFile(__dirname+'/src/404.html',function(err404,data404){
            //     res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            //     res.end(data404);
            // });
            // res.writeHead(302, req.headers.host + "/404.html");  
            // res.redirect(302,"http://192.168.5.23:3000/404.html");
            res.writeHead(302, {'Location': 'http://' + req.headers.host + '/404.html'});  
            res.end();  
            return;
        }
        var extname = path.extname(pathName);
        getMime(extname,function(extnameStr){
            var contentType = extnameStr+';charset=UTF-8';
            res.writeHead(200,{"Content-type":contentType});
            res.end(data);
        });
    });
});

function getMime(extname,callBack){
    fs.readFile(__dirname+'/mime.json','utf8',function(err,data){
        if(err){
            console.log(err);
            return;
        }
        var obj = JSON.parse(data);
        callBack && callBack(obj[extname]);
    });
}

server.listen(3000,'0.0.0.0',function(){
    console.log('在3000端口运行');
});