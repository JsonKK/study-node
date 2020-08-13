const Koa = require('koa');
const app = new Koa;
//设置cookie
app.keys = ['name', 'tobi'];
//再到这里
// 日志
app.use(async (ctx,next)=>{
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
})

//先走这里
app.use(async (ctx,next)=>{
  const start = new Date();
  await next();
  const ms = Date.now() -start;
  ctx.set('X-Response-Time',`${ms}ms`);
})

//再到这里
app.use(async ctx => {
  ctx.cookies.set('name', 'tobi', { signed: true });
  ctx.body = 'Hello World';
});

app.listen(3000,()=>{
  console.log('服务启动');
})