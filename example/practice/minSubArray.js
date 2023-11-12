function min_sub_length(arr, sum) {
  let min_length = Infinity;
  let left = 0;
  let right = 0;
  let curr = 0;
  while (right < arr.length) {
    curr += arr[right];
    while (curr >= sum) {
      //update min_length
      if (min_length > right - left + 1) {
        min_length = right - left + 1;
      }
      curr -= arr[left];
      left++;
    }
    right++;
  }

  if (min_length == Infinity) return 0;
  return min_length;
}
console.log(min_sub_length([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));
