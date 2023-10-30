const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1'), 2000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p2'), 1000, 'p2')
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p3'), 500, 'p3')
})

Promise.race([p1, p2, p3])
  .then(value => {
    console.log(value)
  })
  .catch(err => {
    console.log(err.message)
  })