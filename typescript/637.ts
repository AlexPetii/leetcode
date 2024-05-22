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

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    let currLvl: TreeNode[] = [root];
    let numberAtLvl: number = 0;
    let nextLvl: TreeNode[] = [];
    let sumAtLvl: number = 0;
    const average: number[] = [];

    while (currLvl.length) {
        const curr = currLvl.shift();
        sumAtLvl += curr!.val;
        numberAtLvl++;

        if (curr!.left) nextLvl.push(curr!.left);
        if (curr!.right) nextLvl.push(curr!.right);
        if (!currLvl.length) {
            average.push(avarages(sumAtLvl, numberAtLvl));
            sumAtLvl = 0;
            numberAtLvl = 0;
            [currLvl, nextLvl] = [nextLvl, currLvl];
        }
    }
    return average;
}

function avarages(sum: number, quntity: number) {
    return (sum / quntity)
}