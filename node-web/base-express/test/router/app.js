//引入express
const express = require('express');
const app = express();
const skuRouter = require('./sku.router');
const personRouter = require('./person.router');
const newsRouter = require('./news.router');

//引用路由中间件
app.use('/sku',skuRouter);
app.use('/person',personRouter);
app.use('/news',newsRouter);

//监听服务
app.listen('3000',()=>{
  console.log('listen to port 3000');
})