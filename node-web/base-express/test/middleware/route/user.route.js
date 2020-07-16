//引用express
const express = require('express');
// 定义路由
const router = express.Router();

//增加路由中间件方法
//校验登陆
function vaildLoginParams(req,res,next){
  let {name,password} = req.query;
  if(!name || !password){
    res.json({
      message : '登陆参数校验失败'
    })
  }
  else{
    req.formdata = {name,password};
    next();
  }
}

//路由前置校验
//可以打印日志
//可以作为前置路由校验
router.use(function(req,res,next){
  let {protocol,hostname,originaUrl} = req;
  console.log('this is router url come in :::' + protocol + '://' + hostname + originaUrl);
  next();
})

// 定义内部使用的路由
router.get('/login',[vaildLoginParams],(req,res)=>{
  res.json({
    message : 'router login callback'
  })
})

// 对外暴露路由方法
module.exports = router;