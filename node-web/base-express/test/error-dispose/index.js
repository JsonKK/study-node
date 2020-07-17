// 引用express
const express = require('express');
// 实例化application
const app = express();

//定义错误收集中间件
function errorMiddleware(err,req,res,next){
  if(err){
    let {status} = req;
    res.json({
      message : '过不去这道坎',
      status
    })
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

//抛出异常
app.use('/home',(req,res)=>{
  req.status = {
    message : 'not_login',
    code : -1
  }
  throw new Error('妈呀报错了！');
})


//异常、404等情况的处理一定要放在最底下、相当于都处理不了了，用以下方法进行兜底处理
//404处理
//！！！404并不会抛出异常,在express里会当作正常的处理
app.use(notFoundMiddleware);

//全局接收异常处理
app.use(errorMiddleware);



//启动服务监听
app.listen('3000',()=>{
  console.log('listen port 3000');
})