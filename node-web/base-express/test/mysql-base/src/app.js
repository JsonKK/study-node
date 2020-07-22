// 引入express
const express = require('express');
// 实例化express
const app = express();
//设置端口号
const port = 10002;

//引用用户表路由接口
const routerPerson = require('./route/person.route.js');

//定义错误收集中间件
function errorMiddleware(err,req,res,next){
  if(err){
    let errorInfo = JSON.parse(err.message);
    res.json(Object.assign({
      status : 'error',
      code : -1
    },errorInfo))
  }
  else{
    next();
  }
}

//定义404中间件方法
function notFoundMiddleware(req,res,next){
  res.json({
    message : '没有找到api'
  })
}



// 用户接口路由调用
app.use('/person',routerPerson);

//异常、404等情况的处理一定要放在最底下、相当于都处理不了了，用以下方法进行兜底处理
//404处理
//！！！404并不会抛出异常,在express里会当作正常的处理
app.use(notFoundMiddleware);

//全局接收异常处理
app.use(errorMiddleware);


//监听服务
app.listen(port,()=>{
  console.log('服务启动在端口：' + port);
})