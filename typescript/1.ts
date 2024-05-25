function twoSum(nums: number[], target: number): number[] {
    const elementExist = new Map<number, number>();
    for (let i = 0; i < nums.length; ++i) {
        const curr = nums[i];
        const pair = elementExist.get(target - curr);
        if (pair !== undefined) {
            return [pair, i];
        }
        if (!elementExist.get(curr)) {
            elementExist.set(curr, i);
        }
    }
    return [NaN, NaN];
};