// 引入express资源
const express = require('express');
// 实例化express
//app是web服务的实例
const app = express();


//建立get请求
//请求路径必须完成，即要/person/xxx/xxx
app.get('/person/:name/:age',(req,res)=>{
  let {name,age} = req.params;
  console.log(name+age);
  res.send({
    name,age
  });
})

//使用get请求获取参数
app.get('/user/name',(req,res)=>{
  let {name} = req.query;
  res.json({
    name
  })
})

//匹配所有请求
app.all('*',(req,res)=>{
  console.log(req);
  let {method,url} = req;
  res.json({
    success : true,
    method,
    url
  })
})

// 监听请求
app.listen('3000',()=>{
  console.log('请求建立成功！');
})