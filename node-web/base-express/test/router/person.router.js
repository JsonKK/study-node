const express = require('express');
const router = express.Router();

router.get('/list',(req,res)=>{
  res.json({
    id : 001,
    name : '张三'
  })
})

module.exports = router;