
class Process{
  constructor(){
    console.table(process.argv);
  }

  doSomething(msg,callback){
    this.timeoutWrite(msg);
    // 可以理解为一会有空了时候执行，在程序简单的情况下会快于settimeout 0
    process.nextTick(callback);
  }

  timeoutWrite(msg){
    Promise.resolve().then(()=>{
      console.log(msg);
    })
  }
}


module.exports = Process;