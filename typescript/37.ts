function solveSudoku(board: string[][]): void {
    solve(board);
};

function solve(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") {
                for (let digit = 1; digit <= 9; digit++) {
                    const digitStr = digit.toString()
                    if (isValid(board, i, j, digitStr)) {
                        board[i][j] = digitStr;
                        if (solve(board)) {
                            return true;
                        } else {
                            board[i][j] = "."
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board: string[][], row: number, col: number, digit: string): boolean {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == digit) return false;
        if (board[row][i] == digit) return false;
        const boxRowStart = Math.floor(row / 3) * 3;
        const boxColStart = Math.floor(col / 3) * 3;
        if (board[boxRowStart + Math.floor(i / 3)][boxColStart + i % 3] == digit) return false;
    }
    return true;
}