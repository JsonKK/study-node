//bytes转GB基数
const unit = 1024 * 1024 * 1024;
const os = require('os');
//获取cpu信息
const cpu = os.cpus();
//获取电脑运行内存
//bytes
const ram = os.totalmem();
console.log('电脑运行内存',ram/unit);
//获取电脑剩余内存
const free = os.freemem();
console.log('电脑剩余内存',free/unit);