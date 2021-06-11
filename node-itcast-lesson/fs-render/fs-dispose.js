const fs = require('fs');
const utils = require('util');

class fileDispose {

  open(path){
    fs.open(__dirname + path,'r',(err,fd)=>{
      if(err){
        console.error(err);
        return;
      }
      //创建缓存区大小，太小会造成输出的数据显示不全
      const buf = Buffer.alloc(1024);
      // console.log(buf.length);
      //第一个参数fd ,会从指定文件中读取数据
      //第二个参数 ，将数据写入缓冲区
      //第三个参数 要写入数据的buffer中的位置
      //第四个参数 读取的字节数
      //第五个参数 指定从文件中开始读取的位置
      fs.read(fd,buf,0,buf.length,0,(err,bytesRead,buffer)=>{
        if(err){
          console.error(err);
          return;
        }
        console.log('bytesRead:'+bytesRead);
        console.log(utils.inspect(buffer));
        console.log(buf.toString('utf8'));
        // fs.close(fd,(err2)=>{
        //   console.log(err2);
        // })
      })
    })
  }

  rename(oldname,newname){
    fs.rename(`${__dirname}/${oldname}`,`${__dirname}/${newname}`,(err)=>{
      if(err){
        console.log(err);
      }
    })
  }
}

const fileDis = new fileDispose();
// fileDis.open('/content.txt');
fileDis.rename('content.txt','content1.txt');