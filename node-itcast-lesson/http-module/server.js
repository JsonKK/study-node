const http = require('http');
const url = require('url');
const querystring = require('querystring');
const util = require('util');

class myServe{
  get(){
    const server = new http.Server();
    server.on('request', (req,res)=>{
      //获取url信息
      // const parms = querystring.parse(req.url.split('?')[1]);
      // console.log(`参数name为：${parms.name}`);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`<h1>nodejs</h1><h3>path:${req.url}</h3>`);
      res.end(`<code>${util.inspect(url.parse(req.url,true))}</code>`);
    })



    server.listen(3000,()=>{
      console.log('HTTP server is listening at port 3000.');
    });
  }

  post(){
    http.createServer((req,res)=>{
      let post = '';
      req.on('data',(chunk)=>{
        post += chunk;
      })
      req.on('end',()=>{
        post = querystring.parse(post);
        res.end(util.inspect(post));
      })
    }).listen(3001)
  }
}

const mySev = new myServe();
mySev.post();



