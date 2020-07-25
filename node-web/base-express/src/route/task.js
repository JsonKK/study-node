// 引入express
const express = require('express');
//定义路由
const router = express.Router();
// 引入sequlize models对象
const models = require('../db/models');
//引入通用工具类
const utils = require('../utils/utils.js');
//引入时间工具
const moment = require('moment');

// 定义私有方法
const private = {
  // 增加任务参数校验
  validateCreate(req,res,next){
    //获取增加任务参数
    let {name,endtime,content} = req.body;
    // 收尾去空格
    name = name.trim();
    endtime = moment(endtime).format('YYYY-MM-DD');
    content = content.trim();
    // 验证参数是否存在
    if(!name || !endtime || !content){
      throw {
        message : '缺少增加任务的必要参数'
      }
    }
    // 校验时间格式
    if(endtime == 'Invalid date'){
      throw {
        message : '任务截止时间不合法'
      }
    }
    // 校验数据库里是否有相同数据,没有再添加
    models.todo.findOne({
      where:{
        name,
        endtime,
        content
      }
    }).then(project=>{
      if(project){
        throw {
          message : '任务已经存在，请重新创建任务'
        }
      }
      req.sendData = {name,endtime,content};
      next();
    }).catch(err=>{
      next(err);
    })
    
  },
  //验证删除任务
  validateDelete(req,res,next){
    let {id} = req.params;
    id = id.trim();
    // 判断id是否存在
    if(!id){
      throw{
        message : '缺少必要的id字段'
      }
    }
    //查找库里是否有该项
    models.todo.findOne({
      where : {
        id
      }
    }).then(project => {
      if(project && project.status == 0){
        throw {
          message : '项目不存或已经被删除！'
        }
      }
      req.sendData = {id};
      next();
    }).catch(err => {
      next(err);
    })
  },
  //验证任务修改
  validateEdit(req,res,next){
    //获取增加任务参数
    let {name,endtime,content,id} = req.body;
    // 收尾去空格
    name = name.trim();
    endtime = moment(endtime).format('YYYY-MM-DD');
    content = content.trim();
    // 验证参数是否存在
    if(!name || !endtime || !content || !id){
      throw {
        message : '缺少增加任务的必要参数'
      }
    }
    // 校验时间格式
    if(endtime == 'Invalid date'){
      throw {
        message : '任务截止时间不合法'
      }
    }
    // 校验任务是否完成，如果完成就不能编辑
    models.todo.findOne({
      where:{
        id
      }
    }).then(project=>{
      if(project && project.status != 1){
        throw {
          message : '任务状态异常，编辑失败'
        }
      }
      req.sendData = {name,endtime,content,id};
      next();
    }).catch(err=>{
      next(err);
    })
  },
  //验证任务状态
  validateStatus(req,res,next){
    let {id,status} = req.params;
    id = id.trim();
    status = status.trim();
    // 判断id是否存在
    if(!id || !status){
      throw{
        message : '缺少必要字段'
      }
    }
    //查找库里是否有该项
    models.todo.findOne({
      where : {
        id
      }
    }).then(project => {
      if(project && (project.status == 0 || project.status == status )){
        throw {
          message : '项目状态修改失败！'
        }
      }
      req.sendData = {id,status};
      next();
    }).catch(err => {
      next(err);
    })
  }
}



//增加任务
// 定义内部使用的路由
router.post('/create',[private.validateCreate],async (req,res,next)=>{
  let {name,endtime,content} = req.sendData;
  //往数据库里插入对象
  try{
    let task = await models.todo.create({
      name,
      endtime,
      content,
      status:1
    })
    res.json({
      ...utils.successBackParms(),
      message : '任务增加成功'
    });
  }
  catch(err){
    req.error = '增加任务失败';
    next(err);
  }
  
})


//删除任务
router.delete('/delete/:id',[private.validateDelete],async (req,res,next)=>{
  let {id} = req.sendData;
  try{
    let task = await models.todo.update({
      status : 0
    },{
      where : {
        id,
      }
    })
    if(!task || task[0] == 0){
      throw {
        message : '删除任务失败'
      }
    }
    res.json({
      ...utils.successBackParms(),
      message : '任务删除成功'
    })
  }
  catch(err){
    req.error = '删除任务失败，请稍后再试试';
    next(err);
  }
})

//修改任务状态
router.put('/edit/:id/:status',[private.validateStatus],async (req,res,next)=>{
  let {status,id} = req.sendData;
  try{
    let task = await models.todo.update({
      status
    },{
      where : {
        id
      }
    })
    if(!task || task[0] == 0){
      throw {
        message : '编辑任务状态失败'
      }
    }
    res.json({
      ...utils.successBackParms(),
      message : '任务状态编辑成功'
    })
  }
  catch(err){
    req.error = '编辑任务状态失败，请稍后再试试';
    next(err);
  }
})

//编辑任务
router.post('/edit',[private.validateEdit],async (req,res,next)=>{
  let {name,endtime,content,id} = req.sendData;
  try{
    let task = await models.todo.update({
      name,endtime,content
    },{
      where : {
        id
      }
    })
    if(!task || task[0] == 0){
      throw {
        message : '编辑任务失败'
      }
    }
    res.json({
      ...utils.successBackParms(),
      message : '任务编辑成功'
    })
  }
  catch(err){
    req.error = '编辑任务失败，请稍后再试试';
    next(err);
  }
})

//获取任务列表带分页


// 向外暴露路由
module.exports = router;