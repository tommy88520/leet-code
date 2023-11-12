function maxSum(arr, size) {
  let max_value = Infinity;
  if (size > arr.length) return null;

  for (let i = 0; i <= array.length - size; i++) {
    let attemp = 0;
    for (let j = i; j < i + size; j++) {
      //這個可拿到i的index
      attemp += arr[j];
    }
    if (attemp > max_value) max_value = attemp;
  }

  return max_value;
}

function minSum(arr, size) {
  let min_value = Infinity;
  if (size > arr.length) return null;

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }
  return min_value;
}
const result = minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

console.log(result);

// another

function max_value(arr, size) {
  if (size > arr.length) return null;
  let maxValue = 0;
  for (let index = 0; index < size; index++) {
    maxValue += arr[index];
  }

  for (let j = size; j < arr.length; j++) {
    let temValue;
    temValue = maxValue + arr[j] - arr[j - size];

    if (temValue > maxValue) maxValue = temValue;
  }
  console.log(maxValue);
  return maxValue;
}

const result2 = max_value([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

console.log(result2);
