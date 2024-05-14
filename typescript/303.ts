class NumArray {
    a: number[];
    constructor(nums: number[]) {
        this.a = nums
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += this.a[i]
        }
        return sum
    }
}
