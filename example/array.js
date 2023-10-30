const student1 = "Mark";
const student2 = "Zuck";
const student3 = "Woz";

const ages = [32, 33, 16, 40];

const isFounded = ages.some((age) => age > 18);

// console.log(isFounded);

const numbers = [4, 9, 16, 25];

const newNumbers = [];

numbers.forEach((e) => newNumbers.push(e > 5));

// console.log(newNumbers);

const newFilter = numbers.filter((e) => e > 10);
console.log(newFilter);

const fruits = ["flower", "flaw", "Apple", "Mango"];
fruits.sort();
// console.log(fruits.sort());
// splice(起始 index, 刪除個數，若為0即為插入, 插入的資料)
let students = ["Tommy", "Shawn", "Kenny", "Danial"];
students.splice(0, 2); // students => ['Kenny', 'Danial']
students.splice(1, 0, "calvin", "Tony"); // students => ['Kenny', 'calvin', 'Tony', 'Danial'];

console.log(students);

// 學生和他的成績
const class1 = ["Tommy", "ken"];
const class2 = ["Jasper", "Kai", "Steven"];
const class3 = class1.concat(class2);

console.log(class3);
