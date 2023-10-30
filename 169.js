const majorityElement = function (nums) {
  let cnt = 1;
  item = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (cnt == 0) {
      item = nums[i];
      cnt = 1;
    } else if (item == num[i]) {
      cnt++;
    } else {
      cnt--;
    }
    return item;
  }
};
