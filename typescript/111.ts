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


function minDepth(root: TreeNode | null): number {
    if (!root) return 0

    let stack = [root];
    let lvl = 1;

    while (stack.length) {
        const newStack: TreeNode[] = [];
        while (stack.length) {
            const node: TreeNode | null | undefined = stack.pop()
            if (!(node!.left || node!.right)) return lvl
            if (node!.left) newStack.push(node!.left)
            if (node!.right) newStack.push(node!.right)
        }
        stack = newStack;
        lvl++
    }
    return lvl
};