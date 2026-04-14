function lengthOfLongestSubstring(s: string): number {
  let i: number = 0,
    j: number = 0,
    max: number = 0;
  let mySet = new Set();
  while (j < s.length) {
    if (!mySet.has(s[j])) {
      mySet.add(s[j++]);
      max = Math.max(max, mySet.size);
    } else mySet.delete(s[i++]);
  }
  return max;
}

const s = "abcabcbb";
const s1 = "bbbbb";
const s2 = "pwwkew";

console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
