//计算阶乘
const htutils = require('../utils/htutils');
const math = require('../utils/math');
const url = require('url');

// 定义计算结果方法
function sendResult(req,res,a,fiboval){
  // 响应成功，返回html文档
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
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
  //一次请求两次调用reswritehead报错
  //报错信息 cannot set headers after they are sent to the client
  // 响应成功，返回html文档
  // res.writeHead(200,{
  //   'Content-Type' : 'text/html'
  // })
  const query = url.parse(req.url,true).query;
  let a = query.a;
  if(!isNaN(a)){
    console.time('斐波那契数方法');
    math.fibonacciAsync(Math.floor(a),(val)=>{
      sendResult(req,res,Math.floor(a),val);
    })
    console.timeEnd('斐波那契数方法');
  }
  else{
    sendResult(req,res,NaN,NaN);
  }
}