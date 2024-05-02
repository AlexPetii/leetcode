function missingNumber(nums: number[]): number {
  const n = nums.length;
  const total = (n * (n + 1)) / 2;
  const sum = nums.reduce((accumulator, element) => accumulator + element, 0);
  return total - sum;
}
