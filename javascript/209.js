/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let begin = 0
    let window_s = 0
    let result = Infinity

    for (let end = 0; end < nums.length; end++) {
        window_s += nums[end]
        while (window_s >= target) {
            let window_length = end - begin + 1
            result = Math.min(result, window_length)
            window_s -= nums[begin]
            begin++
        }
    }
    if (result == Infinity) {
        return 0
    } return result
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]));
