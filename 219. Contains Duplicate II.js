/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const km = new Map();
  let left = 0;
  if (!nums.length) return false;
  while (left <= nums.length) {
    if (km.has(nums[left])) {
      if (left - km.get(nums[left]) <= k) {
        return true;
      }
    }
    km.set(nums[left], left);
    left++;
  }

  return false;
};

const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);

console.log(result);
