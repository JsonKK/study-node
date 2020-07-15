const fs = require('fs');
const url = require('url');

//定义一个promise异步方法 ，如果是js、css、html等文件资源，并且本地有这个资源则运行文件
//否则抛出异常
const get = function(req,res){
  // 获取pathname
  const pathname = url.parse(req.url).pathname;
  //获取后缀名
  const postfix = pathname.match(/(\.[^.]+|)$/)[0];
  //输出请求的文件名
  console.log('request for' + pathname + ' received.');
  return new Promise((resolve,reject)=>{
    // 根目录在simple-case
    fs.readFile('src/url-match'+pathname,(err,data)=>{
      if(err){
        reject();
      }
      else{
        //http 状态码 200:ok
        let contentType;
        switch(postfix){
          case '.html':
            contentType = 'text/html';
            break;
          case '.css':
            contentType = 'text/css';
            break;
          case '.js':
            contentType = 'application/javascript';
            break;
        }
        // 有响应类型
        if(contentType){
          res.writeHead(200,{'Content-Type':contentType});
          res.write(data.toString());
          res.end();
          resolve();
        }
        else{
          reject();
        }
      }
    })
    
  })
}

//对外暴露get方法
exports.get = get;