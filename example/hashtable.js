const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.values();

console.log(iterator1.next().value);
// Expected output: "foo"

console.log(iterator1.next().value);
// Expected output: "bar"

// new Map([
//   ["foo", 3],
//   ["bar", {}],
//   ["baz", undefined],
// ]).forEach((value, key) => {
//   console.log(`m[${key}] = ${value}`);
// });

// let myMap = new Map(); // 建立空的 Map
let myMap = new Map([
  [1, "one"],
  [2, "two"],
]); // 建立 Map 時直接代入內容

let keyString = "a string",
  keyObj = {},
  keyFunc = function () {};

// 透過 .set(key, value) 來在 Map 中添加屬性
myMap.set(keyString, "value associated with string");
myMap.set(keyObj, "value associated with object");
myMap.set(keyFunc, "value associated with function");

// 方法
myMap.has(keyString); // true，透過 .has 判斷該 Map 中是否有某一屬性
myMap.size; //  3，透過 .size 來取得 Map 內的屬性數目
myMap.get(keyString); // 使用 .get(key) 可取得屬性的內容
console.log(myMap.get(keyString));
// myMap.delete(keyString); // 刪除 Map 中的某個屬性，成功刪除回傳 true，否則 false
console.log(2, myMap.delete(keyString));
// myMap.clear(); // 清空整個 Map
