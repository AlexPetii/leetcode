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


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root || !subRoot) return false;
    let queue = [root];

    while (queue.length) {
        let item = queue.shift();

        if (item?.val == subRoot?.val) {
            if (isEqual(item, subRoot)) {
                return true;
            }
        }
        if (item?.left) queue.push(item?.left)
        if (item?.right) queue.push(item?.right)
    }
    return false;
};

function isEqual(left: TreeNode | null | undefined, right: TreeNode | null | undefined): boolean {
    if ((!left && right) || (left && !right)) {
        return false;
    } else if (!left && !right) {
        return true;
    } else if (left?.val !== right?.val) {
        return false;
    }
    return isEqual(left?.left, right?.left) && isEqual(left?.right, right?.right)
}