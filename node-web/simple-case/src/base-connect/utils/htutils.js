const url = require('url');

// 对外导出loadParams方法
exports.loadParams = function(req,res,next){
  req.requrl = url.parse(req.url,true);
  req.a = (req.requrl.query.a && !isNaN(req.requrl.query.a)) ? new Number(req.requrl.query.a) : NaN;
  req.b = (req.requrl.query.b && !isNaN(req.requrl.query.b)) ? new Number(req.requrl.query.b) : NaN;
  next && next();
}

//navbar
exports.navbar = function(){
  // 定义返回的菜单栏
  return `<div class="navbar">
          <p><a href="/home">home</a></p>
          <p><a href="/mult">Multiplication</a></p>
          <p><a href="/square">Square's</a></p>
          <p><a href="/factorial">Factorial's</a></p>
          <p><a href="/fibonacci">Fibonacci's</a></p>
          <p><a href="/fibonacci2">Fibonacci2's</a></p>
          </div>`;

}

//page
exports.page = function(title,navbar,content){
  //定义返回的摸板
  return `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link href="./assets/css/main.css" rel="stylesheet" />
            <link rel="shortcut icon" href="./favicon.ico" />
            <link rel="bookmark" href="./favicon.ico" />
          </head>
          <body>
            <h1>${title}</h1>
            <table>
              <tr>
                <td class="nav-title">${navbar}</td>
                <td>${content}</td>
              </tr>
            </table>
          </body>
          </html>`;
}