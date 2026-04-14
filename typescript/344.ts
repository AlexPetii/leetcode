/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): string[] {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

console.log(
  reverseString(["h", "e", "l", "l", "o"]),
  reverseString(["H", "a", "n", "n", "a", "h"]),
  reverseString(["🙂", "🙃", "😉"])
);
