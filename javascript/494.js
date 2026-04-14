const nums = [1, 1, 1, 1, 1];
const targer = 3;

var findTargetSumWays = function (nums, target) {
  let count = 0;

  function dfs(i, cur) {
    if (i === nums.length) {
      if (cur === target) {
        count++;
      }
      return;
    }
    const num = nums[i];

    dfs(i + 1, cur - num);
    dfs(i + 1, cur + num);
  }
  dfs(0, 0);
  return count;
};

console.log(findTargetSumWays(nums, targer))
