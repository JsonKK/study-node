//sku路由列表
const express = require('express');
const router = express.Router();

//定义list方法返回数据
router.get('/list',(req,res)=>{
  res.json({
    price : 123,
    id : 002,
    name : '鞋子'
  })
});

module.exports = router;