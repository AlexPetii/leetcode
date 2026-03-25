function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let res = new Set<string>();

  for (let i = 0; i <= nums.length - 2; i++) {
    let target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let curr_sum = nums[left] + nums[right];
      if (curr_sum === target) {
        res.add([nums[i], nums[left], nums[right]].join(","));
      }
      if (curr_sum > target) {
        right--;
      } else left++;
    }
  }
  return Array.from(res).map((str) => str.split(",").map(Number));
}

console.log("1",
  threeSum([-1, 0, 1, 2, -1, -4]),"\n2",
  threeSum([0, 1, 1]),"\n3",
  threeSum([0, 0, 0])
);
