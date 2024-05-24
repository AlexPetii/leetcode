class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1) return root2
    if (!root2) return root1

    const newNode = new TreeNode((root1 ? root1.val : 0) + (root2 ? root2.val : 0))

    newNode.right = mergeTrees(root1.right, root2.right)
    newNode.left = mergeTrees(root1.left, root2.left)

    return newNode
};