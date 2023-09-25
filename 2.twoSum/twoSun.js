const twoSum = (nums, target) => {
  const initMap = {};
  for(let i = 0; i < nums.length; i++) {
    if (target - nums[i] in initMap) {
      return [initMap[target - nums[i]], i];
    } 
    initMap[nums[i]]= i
  }
  console.log(twoSum([2,7,11,15], 9))
}
console.log('234')