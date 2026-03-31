/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    let stack = [root.left, root.right];

    while (stack.length) {
        let ri = stack.pop()
        let le = stack.pop()

        if (!le && !ri) continue;

        if (!le || !ri) return false;

        if (le.val !== ri.val) return false;

        stack.push(le.left)
        stack.push(ri.right)
        stack.push(le.right)
        stack.push(ri.left)
    } 
    return true
};