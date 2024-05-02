function findDisappearedNumbers(nums: number[]): number[] {
    for (let n of nums) {
        const index = Math.abs(n) - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    const miss: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            miss.push(i + 1);
        }
    }
    return miss;
};