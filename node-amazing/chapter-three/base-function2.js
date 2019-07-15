//无法抛出异步异常
try{
    setTimeout(function(){
        throw new Error('here');
    },10);
}
catch(e){
    console.log(e);
}