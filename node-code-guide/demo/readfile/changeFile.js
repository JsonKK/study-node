var fs = require('fs');

fs.readFile('ykt.json',function(error,data){
    if(error){
        console.log('没找到文件');
    }
    else{
        data = (data.toString()) ? JSON.parse(data) : {};
        data.title = '盐课堂';
        data = JSON.stringify(data);
        fs.writeFileSync('ykt.json',data);
        fs.open('file.txt','r+',function(err,fd){
            if(err){
                console.log('打开文件失败');
            }
            console.log('文件打开成功');
        });
    }
});