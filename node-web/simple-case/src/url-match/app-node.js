//设置端口号
const port = 8124;
// 引用http模块
const http = require('http');
// 引用自定义http util 工具
const htutil = require('./htutils.js');
// 引用文件读取模块
const responseFiles = require('./response-files');

//建立服务
const server = http.createServer((req,res)=>{
  htutil.loadParams(req,res,undefined);
  const pathname = req.requrl.pathname;
  let requirePath;
  switch(pathname){
    case '/':
      requirePath = './home-node';
      break;
    case '/square':
      requirePath = './square-node';
      break;
    case '/factorial':
      requirePath = './factorial-node';
      break;
    case '/fibonacci':
      requirePath = './fibonacci-node';
      break;
    case '/fibonacci2':
      requirePath = './fibonacci-node2';
      break;
    case '/mult':
      requirePath = './mult-node';
      break;
  }
  // 如果有路径
  if(requirePath){
    require(requirePath).get(req,res);
  }
  // 没有路径
  else{
    responseFiles.get(req,res).catch(()=>{
      res.writeHead('404',{'Content-Type':'text/plain'});
      res.end('bad url' + req.url);
    });
  }
})

// 启动服务监听
server.listen(port,()=>{
  console.log('建立了'+port+'端口的服务');
})