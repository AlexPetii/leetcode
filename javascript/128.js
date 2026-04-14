const nums = [100, 4, 200, 1, 3, 2];

var longestConsecutive = function (nums) {
  if (nums === null || nums.length === 0) return 0;

  const set = new Set(nums);
  let maxLength = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currNum = num;
      let currLength = 1;

      while (set.has(currNum + 1)) {
        currNum++;
        currLength++;
      }
      maxLength = Math.max(maxLength, currLength);
    }
  }
  return maxLength;
};

console.log(longestConsecutive(nums));
