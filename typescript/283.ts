/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]) {
    let w = 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] != 0) {
            [nums[w], nums[r]] = [nums[r], nums[w]]
            w++
        }
    } 
};