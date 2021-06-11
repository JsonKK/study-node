const util = require('util');

function Base(){
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function(){
    console.log(`Hello ${this.name}`);
  }
}

Base.prototype.showName = function(){
  console.log(this.name);
}

function Sub(){
  this.name = 'sub';
  this.obj = {
    a : {
      b : {
        c : {
          d :5
        }
      }
    }
  }
}

util.inherits(Sub,Base);

const objBase = new Base();
objBase.showName();
objBase.sayHello();

// sub只继承了原型上的方法，并没有继承构造函数内的方法
const objSub = new Sub();
objSub.showName();
objSub.sayHello && objSub.sayHello();
//第一个参数必须，转为字符串的对象
// 第二个参数为是否显示更多的隐藏信息
// 第三个信息为显示的对象层数
// 第四个参数是否显示颜色字体
console.log(util.inspect(objSub,true,2,true));