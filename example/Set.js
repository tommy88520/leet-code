let set = new Set();
let set2 = new Set([1, 3, 5, 7]); //{1, 3, 5, 7}
let set3 = Array.from(set2);
const result = set3.map((e) => e > 3);
console.log(set2.values());
// set2.
