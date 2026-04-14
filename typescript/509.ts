function fib(n: number): number {
  if (n === 0) return 0;
  let fibNums = [0, 1];
  let i = 1;
  while (n > i) {
    fibNums[i + 1] = fibNums[i] + fibNums[i - 1];
    i++;
  }
  return fibNums[i];
}

console.log(fib(12), fib(5), fib(4), fib(3), fib(2), fib(1), fib(0));
