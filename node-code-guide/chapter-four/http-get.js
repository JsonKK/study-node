var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    response.write('<head><meta charset="utf-8"/></head>');
    response.write('<h1>get到的参数是：</h1>');
    const query = url.parse(request.url,true).query;
    if(typeof query == 'object'){
        for(var key in query){
            response.write('<p>'+key+'：'+query[key]+'</p>');
        }
    }
    response.end('<pre>'+util.inspect(url.parse(request.url,true))+'</pre>');
}).listen(3000);