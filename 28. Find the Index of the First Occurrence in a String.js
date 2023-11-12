/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == "") return 0
  if(!haystack || needle.length > haystack.length) return -1;
  for (let i = 0; i < haystack.length; i++){
    const str = haystack.substring(i, needle.length + i)
    if (str == needle) return i
  }
  return -1
};