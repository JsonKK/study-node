const arr1 = [1,2,3,4,5],
      arr2 = [5,6,7,8,9];

{
  // 方法一
  // 时间最大复杂度 arr1.length * arr2.length
  let intersection = arr1.filter(function (val,index,arr) { 
    return arr2.indexOf(val) > -1
  })
  // console.log('intersection',intersection);
}

{
  //方法二
  //时间复杂度 arr1.length + arr2.length
  let intersection2 = [];
  let cache = {};
  arr1.forEach((item)=>{
    cache[item] = true;
  })

  arr2.forEach((item)=>{
    if(cache[item]){
      intersection2.push(item)
    }
  })
  // console.log('intersection2',intersection2);
}
{
  function* HB(){
    yield '海';
    yield '豹';
    yield '他';
    yield '驱';
  }
  let hb = HB();
  for(let item of hb){
    console.log(item);
  }
}
