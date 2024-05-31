function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    let left: number = 0;
    let top: number = 0;
    let right: number = matrix[0].length;
    let bottom: number = matrix.length;
    let ans: number[] = [];

    while (!isComplete()) {
        for (let i = left; i < right && !isComplete(); i++) {
            ans.push(matrix[top][i])
        }
        top++;
        for (let i = top; i < bottom && !isComplete(); i++) {
            ans.push(matrix[i][right - 1])
        }
        right--;
        for (let i = right - 1; i >= left && !isComplete(); i--) {
            ans.push(matrix[bottom - 1][i])
        }
        bottom--;
        for (let i = bottom - 1; i >= top && !isComplete(); i--) {
            ans.push(matrix[i][left])
        }
        left++;
    }

    function isComplete(): boolean {
        return ans.length === matrix.length * matrix[0].length
    }
    return ans
};