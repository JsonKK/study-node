// async 语法
//让同步方法变为异步方法
async function fragment(){
  return '这是第一段话';
}

//第一种拿到fragment返回值的方式
fragment().then((data)=>{
  console.log(data);
})

//第二种拿到返回值的方式
//await 必须执行在async里
{
  async function testAwait(){
    let msg = await fragment();
    console.log(msg);
  }

  testAwait();
}



//测试一个promise对象能否被await接收
{
  function selfPromise(msg){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(msg || '这是个promise方法')
      },100)
    })
  }

  async function testAwait(){
    let msg = await selfPromise('喜喜哈哈');
    console.log(msg);
  }
  //答案是可以被await接收
  testAwait();
}

