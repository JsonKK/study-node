const ws = require('nodejs-websocket');

function getTime(){
  let date = new Date();
  let miniute = date.getMinutes();
  let second = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  return 'serve//' + miniute + ':' + second + ':' + milliseconds;
}

var serve = ws.createServer((socket)=>{
  let count = 1;
  socket.on('text',(str)=>{
    console.log(str);
    socket.sendText(str + ' ' + getTime());
    broadcast(str)
  })
});

//广播功能，让所有链接的服务器都收到该条消息
function broadcast( msg) {
  serve.connections.forEach(function(conn) {
    conn.sendText(msg)
  })
}

serve.listen(3001,()=>{
  console.log('服务器启动在3001');
})