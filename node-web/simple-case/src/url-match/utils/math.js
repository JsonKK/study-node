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
    process.nextTick(function(){
      fibonacciAsync(n-1,function(val1){
        console.log(val1 + 'a');
        process.nextTick(function(){
          fibonacciAsync(n-2,function(val2){
            console.log(val2 + 'b');
            done(val1 + val2);
          })
        })
      })
    })
  }
}