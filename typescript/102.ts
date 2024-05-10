function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const lvl: number[][] = [];

    while (queue.length !== 0) {
        const lvlSize = queue.length;
        const currLvl = [];
        for (let i = 0; i < lvlSize; i++) {
            const current = queue.shift();
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
            currLvl.push(current.val)
        }
        lvl.push(currLvl)
    }
    return lvl
};