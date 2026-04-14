/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let first = s.length - 1;
  let second = t.length - 1;
  let count_f = 0;
  let count_s = 0;

  while (first >= 0 || second >= 0) {
    while (first >= 0) {
      if (s[first] === "#") {
        count_f++;
        first--;
      } else if (count_f > 0) {
        count_f--;
        first--;
      } else break;
    }
    while (second >= 0) {
      if (t[second] === "#") {
        count_s++;
        second--;
      } else if (count_s > 0) {
        count_s--;
        second--;
      } else break;
    }
    if (s[first] !== t[second]) return false;
    first--;
    second--;
  }
  return true;
};

console.log(
  backspaceCompare("ab#c", "ad#c"),
  backspaceCompare("ab##", "c#d#"),
  backspaceCompare("a#c", "b")
);
