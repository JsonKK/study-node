// 计算幂
const htutils = require('./htutils');

exports.get = function(req,res){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
  const result = req.a * req.a;
  const oneRow = !isNaN(req.a) ? `<p class="result">${req.a} squared = ${result}` : '';
  res.end(htutils.page('Square',htutils.navbar(),`
    ${oneRow}
    <p>Enter numbers to see its square</p>
    <form name="square" action="/square" method="get">
      A:<input type="text" name="a" />
      <br/>
      <input type="submit" value="提交" />
    </from>
  `))
}