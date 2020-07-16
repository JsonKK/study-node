//引入express
const express = require('express');
// 实例化全局应用
const app = express();

//定义中间件方法
function middleware(req,res,next){
  let {name} = req.query;
  console.log(name);
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