console.log(1);
setTimeout(function(){
    console.log(4);
},0);
process.nextTick(function(){
    console.log(3);
});
console.log(2);