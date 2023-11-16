/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const am = new Map();
  let temp = n;
  const squares = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  };

  while (!am.get(temp)) {
    am.set(temp, true);
    let res = temp
      .toString()
      .split("")
      .reduce((ac, acc) => ac + squares[acc], 0);
    if (res == 1) return true;
    temp = res;
  }

  return false;
};
