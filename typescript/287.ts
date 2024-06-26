function findDuplicate(nums: number[]): number {
    let slow = nums[0]
    let fast = nums[slow]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    slow = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
};