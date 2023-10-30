var longestCommonPrefix = function (strs) {
  if (strs == "") {
    return "";
  }
  const A = strs.sort();
  const a1 = A[0];
  const a2 = A[A.length - 1];
  const L = a1.length;

  let result = "";
  for (let i = 0; i < L; i++) {
    if (i < lastStr.length && a1.charAt(i) === a2.charAt(i)) {
      result += a2.charAt(i);
    } else {
      break;
    }
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
