var EventEmmitter = require('events').EventEmitter,
    a = new EventEmmitter();
//定义事件
a.on('event',function(data,str){
    data && console.log(data);
});
//调用事件
a.emit('event',{name:'jsonKK'},'data');
