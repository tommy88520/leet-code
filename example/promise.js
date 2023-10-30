const lastPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve('last changed')},2000)
})
const newPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    if(Math.random() > 0.5){
        resolve('changed')
    }
    else{
        reject('error')
    }
}, 3000)
});

newPromise
.then((data)=>{
  console.log(data)
  return lastPromise.then((lastData)=>lastData)
}).then((data)=>{
  console.log(2, data) // 'changed'
})