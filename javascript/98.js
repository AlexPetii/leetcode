var isValidBST = function (root) {
    let stack = [[root, -Infinity, Infinity]]
    while (stack.length) {
        let [node, min_r, max_r] = stack.pop()
        if (!node) continue
        if (node.val <= min_r || node.val >= max_r) {
            return false
        }
        stack.push([node.left, min_r, node.val])
        stack.push([node.right, node.val, max_r])
    }
    return true
};