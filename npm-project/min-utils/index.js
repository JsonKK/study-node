(function(global, factory){
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  // eslint-disable-next-line no-undef
  typeof define === 'function' && define.amd ? define('minUtils', factory) :
  (function() {
  	// eslint-disable-next-line no-mixed-spaces-and-tabs
  	var current = global.minUtils;
  	var exports = factory();
  	global.minUtils = exports;
  	exports.noConflict = function() { global.minUtils = current; return exports; };
  })();
}(this,function(){

  //判断是否为某些类型
  const judgeMethods = {};
  ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'].forEach((name)=>{
    judgeMethods['is' + name] = function(obj){
      return toString.call(obj) === '[object ' + name + ']';
    }
  })

  //判断是否为对象
  judgeMethods.isObject = function(obj){
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

  // 判断是否为苹果设备
  const isAppleDevice = function(){
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  };

  //获取对象类型
  const getType = function(obj){
    let type = typeof obj;
    if(type !== 'object'){
      //首字母转为大写
      type = type.charAt(0).toUpperCase() + type.slice(1);
      return type;
    }
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/,'$1');
  }

  /**
  * 防抖函数
  * @param fn   需要执行的函数
  * @param wait   等待的时间
  * @param immediate   是否立即执行
  */
  const debounce = function(fn,immediate,wait=100){
    //定义定时器返回结果
    let timeOut,result;
    //延迟方法
    const delay = function(fnc,wait,...args){
      return setTimeout(()=>{
        return fnc.apply(this,args);
      },wait);
    }

    //定时器执行方法
    const later = function(context,args){
      timeOut = null;
      if(args) result = fn.apply(context,args);
    }

    //防抖方法执行
    const debounced = function(...args){
      //有计时器清除
      if(timeOut) clearTimeout(timeOut);
      //如果立即执行
      if(immediate){
        let callNow = !timeOut;
        timeOut = setTimeout(later,wait);
        if(callNow) result = fn.apply(this,args);
      }
      else{
        timeOut = delay(later,wait,this,args);
      }
      return result;
    }

    debounced.cancel = function(){
      clearTimeout(timeOut);
      timeOut = null;
    }

    return debounced;
  }


  //数组去重
  const arrayDeduct = function(array){
    if(Array.isArray(array)){
      return Array.from(new Set(array));
    }
    else{
      return array;
    }
  }

  //字符串去重
  const stringDeduct = function(string){
    if(judgeMethods.isString(string)){
      return [...new Set(string)].join('');
    }
    else{
      return string;
    }
  }

  //数组拉平
  //数组内不能有逗号
  const flatArray = function(array){
    if(Array.isArray(array)){
      return array.toString().split(',');
    }
    else{
      return array;
    }
  }

  const allExports = ({
    arrayDeduct,
    stringDeduct,
    flatArray,
    isAppleDevice,
    getType,
    debounce,
    ...judgeMethods
  })
  
  return allExports;
}))