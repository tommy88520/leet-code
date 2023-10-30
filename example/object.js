//宣告一個 Object 物件，搭配首尾大括號
let mary = {
  //每個 Property 間使用逗號區隔
  name: "Mary",
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};
// console.log(mary.name);
//印出 Mary

//使用 [] 中刮號運算子
const propertyNameA = "say";
const propertyNameB = "Hello";
mary[propertyNameA + propertyNameB]();
//取出 function 後執行，印出 Hello Mary

//異動 Property 的值
// mary.name = `${mary.name} Louise`

//新增一個 Property
mary.friends = ["Jane", "Leda"];

//賦予一個新的 Property
mary.age = 18;

//刪除該 Property
// delete mary.age
//成功時回傳 true

//該特性消失，在使用時回傳 undefuned
// console.log(mary.age)
//undefined

mary.getFriends = function () {
  //取得 friends ，並用 forEach 將每個 friend 個別列出
  // const self = this // 這個可以
  this.friends.forEach(function (friend) {
    // console.log(`${this.name}'s friend has ${friend}`);
  }, this); // 這個也可以
};
mary.getFriends();
// console.log(mary.getFriends())

let mary2 = {};

//分別傳入 Object 名稱 、 Property 名稱 、 Property attributes 描述器
Object.defineProperty(mary2, "name", {
  value: "Mary",
  writable: true,
  enumerable: true,
  configurable: true,
});

// console.log("mary2", mary2);
// Mary

const people = {
  "001": {
    name: "Casper",
    like: "鍋燒意麵",
    age: 18,
  },
  "002": {
    name: "Wang",
    like: "炒麵",
    age: 24,
  },
  "004": {
    name: "滷蛋",
    like: "蘿蔔泥",
    age: 3,
  },
};

for (const [key, value] of Object.entries(people)) {
  console.log(key, value);
}

const rectangle = { width: 16, height: 9 };

let customRectangle = Object.create(rectangle);
customRectangle.color = "blue";
customRectangle.name = "myCustom";

// for (const key in customRectangle) {
//   console.log(key, customRectangle[key]);
// }

for (const key in customRectangle) {
  if (customRectangle.hasOwnProperty(key)) {
    console.log(key, customRectangle[key]);
  }
}
