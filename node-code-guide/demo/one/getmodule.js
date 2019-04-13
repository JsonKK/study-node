// 不会重复应用模块
var myModule = require('./module.js');
var myModule2 = require('./module.js');

myModule.setName('jsonKK');
// 都是指向同个实例，所以覆盖了之前的name
myModule2.setName('jsonKK2');
myModule.sayHello();