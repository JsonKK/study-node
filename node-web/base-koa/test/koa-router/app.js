//使用supervisor 热启动工具来启动该脚本

var Koa=require('koa');
 
var Router = require('@koa/router');

//引入Body获取工具
var bodyParser = require('koa-bodyparser');

// 实例化koa
const app = new Koa();

//使用body参数
//必须提前引入，不然不生效
//可以获取postman中的raw 、 x-www-form-urlencoded 但是无法获取form-data中的数据
app.use(bodyParser());

// 实例化路由
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '首页';
});

//获取get参数
router.get('/news', async (ctx) => {
  //获取到对象格式 {name: 'zhangsang', age: '19'}
  console.log('query',ctx.query);
  //获取到未整理的url字符串 name=zhangsang&age=19
  console.log('querystring',ctx.querystring);  
  ctx.body = '新闻'
})

//获取动态路由的值
router.get('/class/:className', async (ctx) => {
  console.log(ctx.params);
  ctx.body = `所属班级:${ctx.params.className}`;
})

//获取Body参数
router.post('/student_info', async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = `学生信息：`
})



app
  .use(router.routes())
  .use(router.allowedMethods());



// 监听服务
app.listen(3000,()=>{
  console.log('服务启动成功')
})

