function intersection(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    for (let j = 0; j < arr2.length; j++) {
      const element2 = arr2[j];
      if (element == element2) result.push(element);
    }
  }
  return result;
}

//another

function intersection2(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  return result;
}

const test = intersection2([1, 23, 45, 56, 6], [2, 45]);
console.log(test);
