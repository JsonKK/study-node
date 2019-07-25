var fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout;

fs.readdir(process.cwd(),function(err,files){
    console.log(' ');
    if(!files.length){
        console.log('\033[31m No files to show!\033[39m\n');
    }
    function file(i){
        var fileName = files[i];
        fs.stat(__dirname + '/' + fileName,function(err,stat){
            if(stat.isDirectory()){
                console.log(i+'\033[36m'+fileName + '/\033[39m');
            }
            else{
                console.log(i+'\033[90m'+fileName + '\033[39m');
            }
            
            i++;
            if(i == files.length){
                read();
            }
            else{
                file(i);
            }
        })
    }
    function read(){
        console.log(' ');
        stdout.write('\033[35m你的选择:\033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data',option);
    }
    function option(data,d){
        console.log(typeof files[2] + files[2]);
        console.log(typeof data + data);
        console.log(files[2]==data);
        if(files.indexOf(data) == -1){
            stdout.write('\033[35m做出你的选择:\033[39m');
        }
        else{
            stdin.pause();
        }
    }
    file(0);
});