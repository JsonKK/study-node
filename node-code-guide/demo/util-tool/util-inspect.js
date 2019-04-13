var util = require('util');

function person(){
    this.name = 'jsonKK';
    this.toString = function(){
        return this.name;
    };
};

var obj = new person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));