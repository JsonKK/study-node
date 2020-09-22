const Koa = require('koa');
const Router = require('@koa/router');
const path = require('path')
const views = require('koa-view');

const router = new Router();

//实例化koa
const app = new Koa();
// 配置模板引擎中间件，第三方中间件
// app.use(views(path.join(__dirname,'./views/'),{
//   extension:'ejs'
// }))
app.use(views(path.join(__dirname,'./views/'),{map:{html:'ejs'}}));

router.get('/', async (ctx) => {
  await ctx.render('index',{title:'haha'});
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000,()=>{
  console.log('服务启动在3000端口');
})