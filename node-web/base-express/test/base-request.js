// 引入express资源
const express = require('express');
// 实例化express
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

// 监听请求
app.listen('3000',()=>{
  console.log('请求建立成功！');
})