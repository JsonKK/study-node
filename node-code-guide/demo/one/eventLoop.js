setTimeout(()=>{
  console.log(1)
},0)

new Promise((resolve)=>{
  console.log(2);
  resolve()
}).then(()=>{
  console.log(3);
})

console.log(4);