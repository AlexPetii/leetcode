function findDuplicates(nums: number[]): number[] {
    const result: number[] = [];
    const n: number = nums.length;
    for (let i = 0; i < n; i++) {
        const num: number = Math.abs(nums[i]);
        const idx: number = num - 1;
        if (nums[idx] < 0) {
            result.push(num);
        } else {
            nums[idx] *= -1;
        }
    }
    return result;
};
