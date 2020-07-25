// 引入express
const express = require('express');

// 实例化express
const app = express();

//定义端口号
const port = 10002;

//引入通用工具类
const utils = require('./utils/utils.js');

//引入路由集合
const routes = require('./route');

//引入body处理中间件
const bodyParser = require('body-parser');

//body参数格式化
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json())

//日志收集
app.use(utils.logMiddleware);

//接口调用
routes(app);

//处理404
app.use(utils.notFoundMiddleware);

//定义异常处理
app.use(utils.errorMiddleware);


//监听服务
app.listen(port,()=>{
  console.log(`listen to localhost:${port}`)
})