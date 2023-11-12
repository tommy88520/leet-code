function insertionSort(arr) {
  for (let index = 1; index <= arr.length - 1; index++) {
    let key = arr[index];
    let i = index - 1;

    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }
  console.log(arr);
}

let test = [];

for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}

insertionSort(test);
