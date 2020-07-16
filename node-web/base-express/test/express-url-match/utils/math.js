// 对外暴露阶乘方法
const factorial = exports.factorial = function(n){
  if(!n || n == 0){
    return 1;
  }
  else{
    return n * factorial(n-1);
  }
}

// 斐波那契数方法
const fibonacci = exports.fibonacci = function(n){
  if(n === 1 || n === 2){
    return 1;
  }
  else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

//异步调用斐波那契数列方法
const fibonacciAsync = exports.fibonacciAsync = function(n,done){
  if(n === 1 || n === 2){
    done(1);
  }
  else{
    // 这样没有减少必须的计算量，只是将计算过程交给了时间循环调度。
    // 它会使当前的Node进程占用所有的cpu负载,这绝对不是重构计算密集型的最佳途径。
    // 但是这是展示了通过事件循环分派工作的技术，这个技术对一些算法来说非常实用。
    process.nextTick(function(){
      fibonacciAsync(n-1,function(val1){
        process.nextTick(function(){
          fibonacciAsync(n-2,function(val2){
            done(val1 + val2);
          })
        })
      })
    })
  }
}