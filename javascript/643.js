/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let begin = 0
  let result = -Infinity
  let window_state = 0
  for(let end = 0; end < nums.length; end++){
      window_state += nums[end]
      if(end - begin + 1 === k){
          result = Math.max(result, window_state)
          window_state -= nums[begin]
          begin++
      }
  }return result / k
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
