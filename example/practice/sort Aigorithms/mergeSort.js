function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(right), mergeSort(left));
  }

  function merge(a1, a2) {
    let result = [],
      i = 0,
      j = 0;

    while (i < a1.length && j < a2.length) {
      if (a1[i] < a2[j]) {
        result.push(a1[i]);
        i++;
      } else {
        result.push(a2[j]);
        j++;
      }
    }

    if (i < a1.length) {
      for (let index = i; index < a1.length; index++) {
        result.push(a1[index]);
      }
    }

    if (j < a2.length) {
      for (let index = j; index < a2.length; index++) {
        result.push(a2[index]);
      }
    }
    // console.log(result);
    return result;
  }

  // merge([1, 15, 17], [-3, 9, 16]);
}
// mergeSort();
console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));
