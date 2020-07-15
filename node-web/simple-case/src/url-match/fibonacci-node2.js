//计算阶乘
const htutils = require('./htutils');
const math = require('./utils/math');

// 定义计算结果方法
function sendResult(req,res,a,fiboval){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  });
  const oneRow = !isNaN(fiboval) ? `<p class="result">${a} fibonacci = ${fiboval}` : '';
  res.end(
    htutils.page('Fibonacci2',htutils.navbar(),`
      ${oneRow}
      <p>Enter numbers to see its fibonacci</p>
      <form name="fibonacci2" action="/fibonacci2" method="get">
        A:<input type="text" name="a" />
        <br/>
        <input type="submit" value="提交" />
      </from>
    `)
  )
}

exports.get = function(req,res){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
  if(!isNaN(req.a)){
    math.fibonacciAsync(Math.floor(req.a),(val)=>{
      sendResult(req,res,Math.floor(req.a),val);
    })
  }
  else{
    sendResult(req,res,NaN,NaN);
  }
}