function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = [];
  while (left <= right) {
    if (nums[right] * nums[right] > nums[left] * nums[left]) {
      res.unshift(nums[right] * nums[right]);
      right--;
    } else {
      res.unshift(nums[left] * nums[left]);
      left++;
    }
  }
  return res;
}

console.log(
  sortedSquares([-4, -1, 0, 3, 10]),
  sortedSquares([-7, -3, 2, 3, 11])
);
