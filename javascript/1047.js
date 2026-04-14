/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for(let c of s){
        if(stack && c === stack[stack.length - 1]){
            stack.pop()
        }else stack.push(c)
    }return stack.join("")
};