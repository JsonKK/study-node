// 引入express框架
const express = require('express');
const router = express.Router();
// 引入sequlize models对象
const models = require('../../models');

//设置前置日志路由
router.use((req,res,next)=>{
  // 获取协议、主机名、完整路径名
  let {protocol,hostname,originalUrl} = req;
  console.log('this is router url come in :::' + protocol + '://' + hostname + originalUrl);
  next();
})

//设置内部路由
// 新增用户
router.get('/create',async (req,res,next)=>{
  let {name,phone} = req.query;
  if(!name || !phone){
    let errorInfo = JSON.stringify({
      message : '用户名或者手机号不能为空'
    })
    next(new Error(errorInfo));
    return;
  }
  let dbUser = await models.person.findOne({
    where : {
      phone
    }
  })
  if(dbUser){
    let errorInfo = JSON.stringify({
      message : '手机号重复，增加失败'
    })
    next(new Error(errorInfo));
    return;
  }
  //往数据库里插入对象
  let user = await models.person.create({
    name,phone
  })
  console.log(user);
  res.json({
    message : '创建成功',
    status : 'success',
    code : 1
  })
})

//查询用户
router.get('/list',async (req,res)=>{
  let list = await models.person.findAll();
  res.json({
    listl
  })
})

//查询数据库中的某一项
router.get('/detail/:id',async (req,res,next)=>{
  let {id} = req.params;
  let user = await models.person.findOne({
    where:{
      id
    }
  })
  if(!user){
    let errorInfo = JSON.stringify({message : '没有找到相关用户'});
    next(new Error(errorInfo));
    return;
  }
  res.json({
    user
  })
})

// 对外暴露路由对象
module.exports = router;