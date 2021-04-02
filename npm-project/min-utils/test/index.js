const minUtils = require('../index.js');

//判断是否为方法
const testArr = [
  {
    title : '是否为方法',
    value : minUtils.isFunction(function(){})
  },
  {
    title : '是否为对象',
    value : minUtils.isObject({})
  },
  {
    title : '获取数据类型',
    value : minUtils.getType(/1-9/g)
  },
  {
    title : '数组去重',
    value : minUtils.arrayDeduct([1,1,2,2,3,3])
  },
  {
    title : '字符串去重',
    value : minUtils.stringDeduct('aabbcc')
  },
  {
    title : '数组拉平',
    value : minUtils.flatArray([1,[2,[3]]])
  }
];

const testDebounce = minUtils.debounce(function(num,callBack){
  //没有立即执行，输出最后一次调用的函数的值
  // console.log('防抖函数输出的值',num);
  testArr.push({
    title : '防抖函数输出的值',
    value : num
  })
  callBack && callBack();
},false);

//异步处理函数
let asyncFn = function(){ 
  return new Promise((resolve)=>{
    let num = 0;
    let interval = setInterval(function(){
      testDebounce(num,()=>{
        resolve({
          response : 'success'
        })
      });
      num++;
      if(num>10){
        clearInterval(interval);
        interval = null;
      }
    },10)
  })
  
};

const initTestDemo = async function(){
  const res = await asyncFn();
  if(res && res.response){
    console.table(testArr);
  }
}

initTestDemo();
