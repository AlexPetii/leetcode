function removeDuplicates(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[k] != nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}
