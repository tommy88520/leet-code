function pal(str) {
  let f = 0;
  let last = str.length - 1;
  while (f <= last) {
    if (str[f] != str[last]) {
      return false;
    } else {
      f++;
      last--;
    }
  }

  return str;
}

const result = pal("adccccccccsda");

console.log(result);
