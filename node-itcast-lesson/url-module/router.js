var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var userurl = req.url;
    var studentStr = '/student/';
    var teacherStr = '/teacher/';
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    // res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    if(userurl.substr(0,studentStr.length) == studentStr){
        var studentId = userurl.substr(studentStr.length);
        var reg =new RegExp("^\\d{" + studentStr.length + "}$");
        if(reg.test(studentId)){
            res.end('你要查询学生信息，id为'+studentId);
        }
        else{
            res.end('学生学号位数不对');
        }
    }
    else if(userurl.substr(0,teacherStr.length) == teacherStr){
        var teacherId = userurl.substr(teacherStr.length);
        var reg =new RegExp("^\\d{" + (teacherStr.length-4) + "}$");
        if(reg.test(teacherId)){
            res.end('你要查询教师信息，id为'+teacherId);
        }
        else{
            res.end('教师工号位数不对');
        }
    }
    else{
        res.end('输入的地址有问题');
    }
});

server.listen(3000,'0.0.0.0',function(err,data){
    console.log('监听3000端口');
});