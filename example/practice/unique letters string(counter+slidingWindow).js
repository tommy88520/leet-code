function uniquelettersString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let max_length = -Infinity;

  while (end < str.length) {
    console.log(counter);
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      if (end - start > max_length) {
        max_length = end - start;
      }
    }
  }

  if (max_length == -Infinity) {
    console.log("cannot find unique letters");
    return null;
  }

  return max_length;
}

console.log(uniquelettersString("thisishowwedoit"));
