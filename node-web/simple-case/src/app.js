const http = require('http');
const { SSL_OP_NO_COMPRESSION } = require('constants');
const serve = http.createServer(function(req,res){
  console.log(req);
  console.log(res);
  // 设置请求头
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('HELLO,WORLD!\n');
})
serve.listen(8124,'0.0.0.0',()=>{
  console.log('serve启动成功！')
});