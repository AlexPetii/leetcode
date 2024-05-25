function sortedSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1
    let result = new Array(nums.length)

    for (let i = nums.length - 1; i >= 0; i--) {
        let leftAbs = nums[left] < 0 ? nums[left] * -1 : nums[left]
        let rightAbs = nums[right] < 0 ? nums[right] * -1 : nums[right]

        if (leftAbs > rightAbs) {
            result[i] = leftAbs ** 2
            left++
        } else {
            result[i] = rightAbs ** 2
            right--
        }
    }
    return result
};