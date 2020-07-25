// 引用时间工具
const moment = require('moment');
// 引入文件读写工具
const fs = require('fs');
const path = require('path');
const { brotliDecompress } = require('zlib');

const private = {
  //type 1 日志；2错误日志
  recordFile(message,type){
    // 定义文件夹名
    //失败提示语
    let folderName,failInfo;
    switch(type){
      case 2:
        folderName = 'error';
        failInfo = '错误日志记录失败';
        break;
      case 1:
      default:
        folderName = 'log';
        failInfo = '日志记录失败';
        break;
    }
    //定义当前日期
    let fileName = moment().format('YYYY-MM-DD');
    // 定义当前时间 精确到秒
    let time = moment().format('YYYY-MM-DD hh:mm:ss');
    // 定义文件夹路径
    let folderPath = path.resolve(__dirname,`../${folderName}`);
    // 定义文件路径
    let filePath = path.resolve(folderPath,`./${fileName}.txt`);
    // 判断文件夹是否存在
    if(!fs.existsSync(folderPath)){
      fs.mkdirSync(folderPath);
    }
    //获取文件内容
    //如果有内容则则把内容与新内容合并
    let historyText;
    try{
      historyText = fs.readFileSync(filePath,{encoding:'utf-8'});
    }
    catch(err){
      historyText = '';
    }
    if(historyText){
      message = message + historyText;
    }
    //appendFile 往文件后部追加内容
    //对文件写入内容
    fs.writeFile(filePath, message, function (error) {
      if (error) {
        console.log(error);
        console.log(failInfo + time);
      } 
    })
  },
  recordLogFile(message){
    this.recordFile(message,1);
  },
  //记录报错文件
  recordErrorFile(message){
    this.recordFile(message,2);
  },
  // 获取请求路径
  getRequestPath(req){
    if(!req){
      return '';
    }
    let{protocol,hostname,originalUrl} = req;
    return (protocol + '://' + hostname + originalUrl);
  }
};

//定义一些工具方法
const utils = {
  //通用成功返回参数
  successBackParms(){
    return {
      code : 1,
      status : 'success'
    }
  },
  //定义404处理
  notFoundMiddleware(req,res,next){
    res && res.json({
      message : '没有找到api'
    })
  },
  //异常处理
  errorMiddleware(err,req,res,next){
    if(err){
      let postUrl = 'this request url is ::::' + private.getRequestPath(req)+ '; ';
      let errorInfo = err.message;
      let time = moment().format('YYYY-MM-DD hh:mm:ss');
      private.recordErrorFile(postUrl + time + ' 错误信息是：' + errorInfo + '\r\n');
      res.json(Object.assign({
        status : 'error',
        code : -1
      },{message : req.error || errorInfo}))
    }
    else{
      next();
    }
  },
  // 日志收集
  logMiddleware(req,res,next){
    //请求路径拼接
    let postUrl = 'this request url is ::::' + private.getRequestPath(req)+ '; ';
    let time = moment().format('YYYY-MM-DD hh:mm:ss');
    private.recordLogFile(postUrl + time + '\r\n');
    // console.log('this request url is ::::' + private.getRequestPath(req),time);
    next();
  }
}


// 对外暴露工具
module.exports = utils;