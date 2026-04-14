/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let pair = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char in pair) {
            stack.push(char)
        } else {
            let prev = stack.pop()
            if (pair[prev] !== char) {
                return false
            }
        }

    } return stack.length === 0
};