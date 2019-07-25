var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var querystring = require("querystring");
var formidabel = require('formidable');
var util = require('util');
var fs = require('fs');
var sd = require("silly-datetime");

var server = http.createServer(function(req,res){
    // 不处理小图标
    if(req.url == '/favicon.ico'){
        return;
    }

    //表单提交请求
    if(req.url == '/sub-form' && req.method.toLowerCase() == 'post'){
        var postData = '';
        // req.setEncoding('utf8');
        // req.addListener('data',function(chunk){
        //     postData += chunk;
        // });
        // req.addListener('end',function(){
        //     var data = postData.toString();
        //     var dataObj = querystring.parse(data);
        //     res.end('success');
        // });

        var form = new formidabel.IncomingForm();
        form.encoding = 'utf-8';
        form.uploadDir = './upload';

        var filesArr = [];

        form.on('file', function (filed, file) {
            filesArr.push([filed, file]);
        });
        
        form.parse(req,function(err,fields,files){
            if(err){
                throw err;
            }
            fs.mkdir('./src/pics/',(err,data)=>{
                let time,randomNum,typeName,oldPath,newPath;
                filesArr.forEach((pic,index)=>{
                    time = sd.format(new Date(), 'YYYYMMDDHHmmss');
                    randomNum = parseInt(Math.random() * 89999 + 10000);
                    typeName = path.extname(pic[1].name);
                    oldpath = __dirname + "/" + pic[1].path;
                    newpath = __dirname + "/src/pics/" + time + randomNum + typeName;
                    //改名
                    fs.rename(oldpath,newpath,function(err){
                        if(err){
                            console.log("改名失败");
                            res.end(pic[1].name + '改名失败');
                            return;
                        }
                        if(index == filesArr.length-1){
                            res.writeHead(200, {'content-type': 'text/plain'});
                            res.end("图片上传成功");
                        }
                    });
                });
            });
        });
        return;
    }

    //渲染页面和静态资源
    var pathName = url.parse(req.url).pathname;
    if(pathName == '/'){
        pathName += 'index.html';
    }
    fs.readFile(__dirname + '/src' + pathName,function(err,data){
        if(err){
            res.writeHead(302,{'Location':'http://' + req.headers.host + '/404.html'});
            res.end();
            return;
        }
        var extname = path.extname(pathName);
        getMime(extname,function(extnameStr){
            var contentType = extnameStr + ';charset=UTF-8';
            res.writeHead(200,{'Content-type':contentType});
            res.end(data);
        });
    });
});

function getMime(extname,callback){
    fs.readFile(__dirname + '/mime.json','utf8',function(err,data){
        if(err){
            console.log(err);
            return;
        }
        var obj = JSON.parse(data);
        callback && callback(obj[extname]);
    });
}

server.listen(3000,'0.0.0.0',function(){
    console.log('运行在3000端口');
});