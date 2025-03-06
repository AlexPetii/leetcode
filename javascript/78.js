const nums = [1, 2, 3];

var subsets = function (nums) {
  let results = [[]];

  let recursive = (start, result) => {
    for (let i = start; i < nums.length; i++) {
      result.push(nums[i]);
      results.push([...result])
      recursive(i + 1, result);
      result.pop();
    }
  };
  recursive(0, []);
  return results;
};

console.log(subsets(nums));
