//计算阶乘
const htutils = require('./htutils');
const math = require('./utils/math');

exports.get = function(req,res){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
  const result = math.fibonacci(Math.floor(req.a) || 1);
  const oneRow = !isNaN(req.a) ? `<p class="result">${req.a} fibonacci = ${result}` : '';
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