function c(){
    b();
}

function b(){
    a();
}

function a(){
    //执行在异步里的话，有价值的堆栈信息无法跟踪
    setTimeout(function(){
        throw new Error('here');
    },10);
    //可以跟踪调用的堆栈
    // throw new Error('here');
}

c();