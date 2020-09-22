//引入koa
const Koa = require('koa');
//引入Kou路由
const router = require('@koa/router')();
//定义端口号
const port = 3000;
//实例化koa
const app = new Koa();

// 测试洋葱圈设计模式
app.use(async (ctx,next)=>{
  console.log('1.这是第一个中间件01');
  await next();
  console.log('5.匹配路由返回执行的中间件');

  //设置404页面
  if(ctx.status == 404){
    ctx.status = 404;
    ctx.body = '这是一个404页面';
  }
  else{
    console.log('结束！！');
  }
});

app.use(async (ctx,next)=>{
  console.log('2.这是第一个中间件02');
  await next();
  console.log('4.匹配路由返回执行的中间件');
});


// 创建访问新闻页面
router.get('/news',async (ctx)=>{
  console.log('3.匹配到新闻页路由');
  ctx.body = '新闻页';
})

//在koa中使用路由中间件
app.use(router.routes())
    .use(router.allowedMethods());

//监听服务
app.listen(port,()=>{
  console.log(`服务器启动在${port}`);
})