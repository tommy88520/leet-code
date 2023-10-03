function isPalindrome(x) {
  // 处理负数，负数不可能是回文数字
  if (x < 0) {
    return false;
  }

  const str = x.toString();

  let left = 0; 
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(isPalindrome(212))


function test(num) {
  if (num < 0) {
    return false;
  }
  const newNum = num.toString();
  let left = 0
  let right = newNum.length - 1

  while(right > left) {
    if (newNum[left] !== newNum[right]) {
      return false;
    }
    right--
    left++
  }
  return true
}