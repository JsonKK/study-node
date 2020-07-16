// 引入express
const express = require('express');
// 实例化application
const app = express();
//设置端口号
const port = 8124;
//引用解析url工具
const url = require('url');
const ejs = require('ejs');
const serveStatic = require('serve-static');
const path = require('path');
//引入自定义工具类
const math = require('./utils/math');
app.set('views','test/express-url-match/views');
//设置html模板渲染引擎
app.engine('html',ejs.__express);
//设置渲染引擎为html
app.set('view engine','html');
//静态资源代理
app.use('/assets',serveStatic(path.join(__dirname, './assets')));

//建立路由监听
app.all('*',(req,res)=>{
  let {pathname} = url.parse(req.originalUrl,true);
  let requirePath,title,result;
  switch(pathname){
    case '/':
      title = 'Home page';
      requirePath = 'home-node.html';
      break;
    case '/square':
      title = 'square';
      requirePath = 'square-node.html';
      break;
    case '/factorial':
      title = 'factorial';
      requirePath = 'factorial-node.html';
      result = (isNaN(req.query.a)) ? '' : math.factorial(Math.floor(req.query.a));
      break;
    case '/fibonacci':
      title = 'fibonacci';
      requirePath = 'fibonacci-node.html';
      result = (isNaN(req.query.a)) ? '' : math.fibonacci(Math.floor(req.query.a) || 1);
      break;
    case '/mult':
      title = 'mult';
      requirePath = 'mult-node.html';
      break;
  }
  // 如果有路径
  if(requirePath){
    ejs.renderFile('test/express-url-match/views/'+requirePath,{
      req,res,
      query:req.query,
      result
    },undefined,(err,str)=>{
      if(err){
        res.render('layout.html',{title:'404' ,body : '<h2>页面被狗叼走了</h2>'});
      }
      else{
        res.render('layout.html',{title ,body : str});
      }
      
    });
  }
  // 没有路径
  else{
    res.render('layout.html',{title:'404' ,body : '<h2>页面被狗叼走了</h2>'});
  }
})

// 启动服务监听
app.listen(port,()=>{
  console.log('建立了'+port+'端口的服务');
})