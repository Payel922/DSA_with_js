let nums = [2, 2, 1];

var singleNumber = function (nums) {
  let hash = {};

  // Pass 1: Build the complete frequency count
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  // Pass 2: Find the element that appeared only once
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i];
    }
  }
};
//another approach with xor
var singleNumbers = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ [nums[i]];
  }
  return xor;
};

console.log(singleNumbers(nums)); // 1
