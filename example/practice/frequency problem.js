function sameFrequency(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  if (arr1.length != arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    if (counter1[element]) {
      counter1[element]++;
    } else {
      counter1[element] = 1;
    }
  }

  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    if (counter2[element]) {
      counter2[element]++;
    } else {
      counter2[element] = 1;
    }
  }

  console.log(counter1, counter2);

  for (let property in counter1) {
    if (!counter2[property]) {
      return false;
    }

    if (counter2[property] !== counter1[property]) {
      return false;
    }

    return true;
  }
}

const result = sameFrequency("aabx", "abax");

console.log(result);
