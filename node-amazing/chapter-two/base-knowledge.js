function a(b,c){
    b == 'first' && console.log('b存在');
    c == 'second' && console.log('c存在');
}
//call和apply都可以改变当前函数的指向
//区别在于call参数接收参数列表，apply接收数组列表
a.call({a:'b'},'first','second');
a.apply({a:'b'},['first','second']);

//在实例上增加方法
function animal(name){
    typeof name == 'string' && (this.name = name);
}
animal.prototype.getName = function(){
    return this.name;
}
var lily = new animal('lily');
console.log(lily.getName());

//过滤
//会返回一个新数组，不会改变原来的数组
var filterArr = [1,2,3].filter((res)=>{
    return res>1;
});
console.log(filterArr);

//改变值
var mapArr = [1,2,3].map((res)=>{
    return res*2;
});
console.log(mapArr);
