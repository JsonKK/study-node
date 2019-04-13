var fs = require('fs');
//异步读取文件接口
fs.readFile('file.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log(data);
	}
});

fs.readFile('file.json','utf-8',function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log(data);
		console.log(typeof data);
		data = JSON.parse(data);
		if(data.phone){
			console.log(data.phone);
		}
	}
});
console.log('end');
var data = fs.readFileSync('file.txt','utf-8');
console.log(data + '+++同步看文件');
console.log('end2');