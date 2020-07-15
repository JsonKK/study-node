//计算阶乘
const htutils = require('../utils/htutils');
const math = require('../utils/math');
const url = require('url');
exports.get = function(req,res){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
  const query = url.parse(req.url,true).query;
  let a = query.a;
  const result = math.fibonacci(Math.floor(a) || 1);
  const oneRow = !isNaN(a) ? `<p class="result">${a} fibonacci = ${result}` : '';
  res.end(htutils.page('Fibonacci',htutils.navbar(),`
    ${oneRow}
    <p>Enter numbers to see its fibonacci</p>
    <form name="fibonacci" action="/fibonacci" method="get">
      A:<input type="text" name="a" />
      <br/>
      <input type="submit" value="提交" />
    </from>
  `))
}