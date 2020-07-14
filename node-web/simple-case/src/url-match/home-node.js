const htutils = require('./htutils');
exports.get = function(req,res){
  res.writeHead(200,{
    'Content-Type' : 'text/html'
  })
  res.end(
    htutils.page('Home page',htutils.navbar(),'<p>Home page</p>')
  )
}