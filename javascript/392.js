const s = "abc";
const t = "ahbgdc";
const s1 = "axc";

var isSubsequence = function (s, t) {
  let sp = 0;
  let tp = 0;
  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
    }
    tp++;
  }
  return sp === s.length;
};

console.log(isSubsequence(s, t));
console.log(isSubsequence(s1, t));
