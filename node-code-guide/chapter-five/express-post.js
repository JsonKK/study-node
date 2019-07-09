var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
//第一个参数为请求路径
//‘/’代表3000端口，后面不带请求路径
// ‘/*’代表后面跟随所有的路径都会被截取
// 也可以指定特定接口，例如‘/content/index’
app.all('/*',function(req,res){
    if(!req.body){
        res.send('post内容空');
        return;
    }
    res.send(req.body.title+req.body.text);

});
app.listen(3000);