function countBits(n: number): number[] {
    let memo = [0];
    for (let i = 1; i <= n; i++) {
        memo[i] = memo[i & (i - 1)] + 1
    }
    return memo;
};