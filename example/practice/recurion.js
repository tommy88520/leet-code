function rs(n) {
  if (n == 1) {
    return 10;
  } else {
    return rs(n - 1) + 15;
  }
}

console.log(rs(4));

let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

function collector(arr1) {
  let result = [];
  helper(arr1);
  return result;

  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

function collector2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr)) {
      collector2(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
}

console.log(collector(arrs));
