/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sm = makeMap(s);
  const tm = makeMap(t);
  if (s.length != t.length) return false;
  for (const [key, value] of sm) {
    if (sm.has(key) && sm.get(key) != tm.get(key)) return false;
  }

  return true;
};

function makeMap(str) {
  const sm = new Map();

  for (const s of str) {
    if (sm.has(s)) {
      sm.set(s, sm.get(s) + 1);
    } else {
      sm.set(s, 1);
    }
  }

  return sm;
}
