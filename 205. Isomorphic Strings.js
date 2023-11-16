/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  const sm = new Map();
  const tm = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!sm.has(s[i])) {
      sm.set(s[i], t[i]);
    }

    if (!tm.has(t[i])) tm.set(t[i], s[i]);

    if (sm.get(s[i]) != t[i] || tm.get(t[i]) != s[i]) return false;
  }

  return true;
};
