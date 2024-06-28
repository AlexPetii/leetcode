function majorityElement(nums: number[]): number {
    let elem = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== elem) {
            count--;
        } else {
            count++;
        }
        if (count < 0) {
            elem = nums[i]
            count = 0;
        }
    }
    return elem;
}