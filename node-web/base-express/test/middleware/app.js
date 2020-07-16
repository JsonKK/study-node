//引入express
const express = require('express');
// 实例化全局应用
const app = express();
//引入url 工具
const url = require('url');

//引用自定义路由
const routerUser = require('./route/user.route');

//日志打印
function log_middleware(req,res,next){
  let{protocol,hostname,originalUrl} = req;
  console.log('this request url is ::::' + protocol + '://' + hostname + originalUrl);
  next();
}

//定义中间件方法
function middleware(req,res,next){
  let {name} = req.query;
  //!name时候会放''通行
  if(!name || !name.length){
    res.json({
      message : '缺少name参数'
    })
  }
  else{
    //赋值在响应的数据会一直被带到下个中间件
    res.middleware = name;
    next()
  }
}

app.use(log_middleware);

app.use('/user',routerUser);

//全局请求引用中间件
app.all('*',middleware);

app.get('/test',(req,res)=>{
  console.log(res.middleware);
  res.json({
    success : true
  })
})


//监听服务
app.listen('3000',()=>{
  console.log('listen in port 3000');
})