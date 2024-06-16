function firstMissingPositive(nums: number[]): number {
    let i = 0;
    while (i < nums.length) {
        let curr = nums[i] - 1;
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[curr]) {
            [nums[i], nums[curr]] = [nums[curr], nums[i]]
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
}