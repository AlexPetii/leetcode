function setZeroes(matrix: number[][]): void {
    let rowLength = matrix[0].length;
    let colLength = matrix.length;
    let hasRowZero = false;
    let hasColZero = false;

    for (let i = 0; i < rowLength; i++) {
        if (matrix[0][i] == 0) {
            hasRowZero = true;
            break
        }
    }

    for (let i = 0; i < colLength; i++) {
        if (matrix[i][0] == 0) {
            hasColZero = true;
            break
        }
    }

    for (let r = 1; r < colLength; r++) {
        for (let c = 1; c < rowLength; c++) {
            if (matrix[r][c] == 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }

    for (let i = 1; i < rowLength; i++) {
        if (matrix[0][i] == 0) {
            for (let r = 1; r < colLength; r++) {
                matrix[r][i] = 0;
            }
        }
    }

    for (let i = 1; i < colLength; i++) {
        if (matrix[i][0] == 0) {
            for (let c = 1; c < rowLength; c++) {
                matrix[i][c] = 0;
            }
        }
    }

    if (hasRowZero) {
        for (let i = 0; i < rowLength; i++) {
            matrix[0][i] = 0;
        }
    }
    if (hasColZero) {
        for (let i = 0; i < colLength; i++) {
            matrix[i][0] = 0;
        }
    }
};