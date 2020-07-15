const connect = require('connect');
// favicon图标处理
const favicon = require('serve-favicon');
const path = require('path');
const morgan = require('morgan');
// 静态资源处理
const serveStatic = require('serve-static');
const htutils = require('./utils/htutils');
const http = require('http');
const app = connect();

app.use(favicon(path.join(__dirname, '/', 'favicon.ico')))
    .use(morgan())
    .use('/assets',serveStatic(path.join(__dirname, './assets')))
    .use('/home',require('./views/home-node').get)
    .use('/square',require('./views/square-node').get)
    .use('/factorial',require('./views/factorial-node').get)
    .use('/fibonacci',require('./views/fibonacci-node').get)
    .use('/fibonacci2',require('./views/fibonacci-node2').get)
    .use('/mult',require('./views/mult-node').get)
    .use((req,res,next)=>{
      res.writeHead(200,{
        'Content-Type' : 'text/html'
      })
      res.end(
        htutils.page('404',htutils.navbar(),'<p>页面被狗叼走了</p>')
      )
    })
    .listen(8124,()=>{
      console.log('listening to http://localhost:8124');
    })
      