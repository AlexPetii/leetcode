function isPalindrome(s: string): boolean {
  const filter = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = filter.length - 1;
  while (left < right) {
    if (filter[left] !== filter[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(
  isPalindrome("A man, a plan, a canal: Panama"),
  isPalindrome("race a car"),
  isPalindrome(" ")
);
