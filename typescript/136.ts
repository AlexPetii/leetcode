function singleNumber(nums: number[]): number {
    const mask = nums.length;
    let c = 0;
    for (let i = 0; i < mask; i++) {
        c ^= nums[i];
    }
    return c;
};