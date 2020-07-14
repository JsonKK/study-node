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