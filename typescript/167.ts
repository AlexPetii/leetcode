function twoSum(numbers: number[], target: number) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    while (numbers[left] + numbers[right] > target) right--;
    while (numbers[left] + numbers[right] < target) left++;
    if (numbers[left] + numbers[right] == target) {
      return [left + 1, right + 1];
    }
  }
}

console.log(
    twoSum([2, 7, 11, 15], 9),
  twoSum([2, 3, 4], 6),
  twoSum([-1, 0], -1)
);
