/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minN = Math.min(...prices);
  let maxP = 0;
  let res = 0;
  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    const pro = element - minN;
    if (pro >= 0 && prices.indexOf(minN) < element) {
      maxP = Math.max(0, pro);
      res = Math.max(res, maxP);
    }
  }

  return res;
};

const romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  let len = s.length - 1;
  let pre = 0;

  while (len > 0) {
    let cur = map[s[len]];
    if (cur < pre) {
      result += cur;
    } else {
      result -= cur;
    }
    pre = cur;
    len--;
  }

  return result;
};
