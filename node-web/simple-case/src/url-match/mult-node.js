const htutils = require('./htutils');

exports.get = function(req,res){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
  const result = req.a * req.b;
  const oneRow = !isNaN(req.a) && !isNaN(req.b) ? `<p class="result">${req.a} * ${req.b} = ${result}</p>` : '';
  res.end(htutils.page('Multiplication',htutils.navbar(),`
    ${oneRow}
    <p>Enter numbers to multiply</p>
    <form name="mult" action="/mult" method="get">
      A:<input type="text" name="a" /><br/>
      B:<input type="text" name="b" />
      <input type="submit" value="提交" />
    </from>
  `))
}