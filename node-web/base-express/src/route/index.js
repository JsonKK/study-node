//引入task任务列表接口集合
const routerTask = require('./task.js');
//收集所有目录下的接口
const initRouter = function(app){
  if(!app){
    return;
  }
  //任务接口集合调用
  app.use('/task',routerTask);
}


//对外暴露
module.exports = initRouter;