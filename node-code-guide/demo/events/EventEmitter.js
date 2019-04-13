var events = require('events');
var emitter = new events.EventEmitter();

// EventEmitter.on(event, listener)  为指定事件注册一个监听器，接受一个字符串  event  和一个回调函数  listener 
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});


emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

// EventEmitter.emit(event, [arg1], [arg2], [...]) 发射  event  事件，传递若干可选参数到事件监听器的参数表
emitter.emit('someEvent', 'byvoid', 1991);