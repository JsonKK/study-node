var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    var pages = ['/block.html','/circle.html'];
    
    if(pages.indexOf(req.url) > -1 && req.url != '/'){
        res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
        // var url = './node-itcast-lesson/fs-render'+req.url
        var url = '.'+req.url
        fs.readFile(url,function(err,data){
            res.end(data);
        });
    }
    else if(req.url.indexOf('jpg')>-1){
        
        var url = '.'+req.url
        fs.readFile(url,function(err,data){
            res.writeHead(200,{"Content-type":"image/jpg"});
            res.end(data);
        });
    }
    else{
        res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
        res.end("嘻嘻，没有这个页面");
    }
    
    
});

server.listen(3000,function(data){
    console.log(data || '运行了 3000');
});