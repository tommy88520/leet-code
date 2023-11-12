let arr = [15, 3, 17, -17, 18, 20];
quickSort(0, arr.length);
console.log(arr);
function partition(p, r) {
  let x = arr[r];
  let i = p - 1;

  for (let j = p; j < r - 1; j++) {
    if (arr[j] <= x) {
      i = i + 1;

      // swap arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;

  return i + 1;
}

function quickSort(p, r) {
  //p 帶0 r 帶 arr.length-1
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}
