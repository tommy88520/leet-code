function func1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(1, func1(10));

function func2(n) {
  return ((1 + n) * n) / 2;
}

let time1 = window.performance.now();
func1(1000000);
let time2 = window.performance.now();
let timeDiff1 = (time2 - time1) / 1000;
console.log(`It takes ${timeDiff1} seconds to run fun1.`);

let time3 = window.performance.now();
func2(1000000);
let time4 = window.performance.now();
let timeDiff2 = (time4 - time3) / 1000;
console.log(`It takes ${timeDiff2} seconds to run fun2.`);
