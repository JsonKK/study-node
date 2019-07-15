var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    //不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
    fs.readdir(__dirname+'/test-floder',function(err,files){
        var floder = [];
        (function interator(i){
            if(i == files.length){
                res.write(floder.toString());
                res.end();
                return false;
            }
            fs.stat(__dirname + '/test-floder/' + files[i],function(err,state){
                if(state.isDirectory()){
                    floder.push(files[i]);
                }
                interator(i+1);
            });
        })(0);
        
    });
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    
});

server.listen(3000,'0.0.0.0',function(err,data){
    console.log('运行了3000端口');
})
