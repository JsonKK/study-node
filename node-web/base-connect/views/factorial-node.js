//计算阶乘
const htutils = require('../utils/htutils');
const math = require('../utils/math');

exports.get = function(req,res){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
  const result = math.factorial(Math.floor(req.a));
  const oneRow = !isNaN(req.a) ? `<p class="result">${req.a} factorial = ${result}` : '';
  res.end(htutils.page('Factorial',htutils.navbar(),`
    ${oneRow}
    <p>Enter numbers to see its factorial</p>
    <form name="factorial" action="/factorial" method="get">
      A:<input type="text" name="a" />
      <br/>
      <input type="submit" value="提交" />
    </from>
  `))
}