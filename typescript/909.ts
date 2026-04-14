function snakesAndLadders(board: number[][]): number {
  const boardLength = board.length * board.length;
  const cache = new Map();
  const getSquareNo = (no) => {
    if (cache.has(no)) return cache.get(no);
    let length = board.length;

    let result;
    let y = Math.trunc((no - 1) / length);
    if (y % 2 === 0) {
      result = board[length - 1 - y][(no - 1) % length];
    } else {
      result = board[length - 1 - y][length - 1 - ((no - 1) % length)];
    }

    cache.set(no, result);

    return result;
  };

  const queue: any = [1];
  const minMoves: any = [];

  minMoves[1] = 0;

  while (queue.length) {
    const current = queue.shift();
    if (current === boardLength) return minMoves[boardLength];

    for (let i = current + 1; i <= Math.min(boardLength, current + 6); i++) {
      let valueForCurrentIdx = getSquareNo(i);
      let idxToSave = valueForCurrentIdx === -1 ? i : valueForCurrentIdx;

      if (minMoves[idxToSave] === undefined) {
        minMoves[idxToSave] = minMoves[current] + 1;
        queue.push(idxToSave);
      }
    }
  }

  return -1;
}

const board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1],
];
const board2 = [
  [-1, -1],
  [-1, 3],
];

console.log(snakesAndLadders(board));
console.log(snakesAndLadders(board2));
