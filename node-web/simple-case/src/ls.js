var fs = require('fs');

var dir = '.';
if(process.argv[2]){
  dir = process.argv[2];
}
//读取目录内容
//dir为读取路径
var files = fs.readdirSync(dir);
for(let fn in files){
  console.log(files[fn]);
}

