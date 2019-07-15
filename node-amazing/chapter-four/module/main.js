var a = require(__dirname+'/module-a');
var b = require(__dirname+'/module-b');
var c = require(__dirname+'/module-c');


console.log(a.name);
console.log(a.data);
console.log(a.getPrivate());
//使用构造函数的形式引用对象，每次引用都是独立的，不会污染原始数据和其他引用的数据
var person = new b('jsonKK');
person.talk();

//使用对象的形式被引用，在c里面重新赋值后b里的值也发生了改变
var personB = c;
personB.addName('jsonKK');
personB.talk();

var personC = c;
personC.addName('无厘头的苏');
personB.talk();