var isBalanced = function (root) {
    let height = function (root) {
        if (!root) {
            return 0
        }else return Math.max(height(root.left), height(root.right)) + 1
    }
    if(!root){
        return true
    }else {
        let left_h = height(root.left)
        let right_h = height(root.right)
        if(Math.abs(left_h - right_h)  > 1) return false 
    }
    return (isBalanced(root.left) && isBalanced(root.right))
};