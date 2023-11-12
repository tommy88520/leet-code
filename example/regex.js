const input = "英數A自25";
const chineseRegex = /([\u4e00-\u9fa5a-zA-Z]+)|(\d+)/g; // 匹配中文字符

const chineseMatches = input.match(chineseRegex); // 匹配中文字符

console.log("中文字符:", chineseMatches[0]); // 输出中文字符数组
console.log("数字:", chineseMatches[1]); // 输出数字数组