/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const result = new map();
  for (let a of magazine) {
    result.set(a, (result.get(c) || 0) + 1);
  }

  for (let a of ransomNote) {
    if (!result.get(a) || result.get(c) <= 0) return false;
    result.set(a, result.get(c) - 1);
  }
  return true;
};
