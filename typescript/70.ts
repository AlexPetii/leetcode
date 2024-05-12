function climbStairs(n: number): number {
    if (n < 3) return n;
    let a = 1, b = 1, tmp;
    for (let i = 2; i <= n; i++) {
        tmp = a + b;
        a = b;
        b = tmp;
    }
    return tmp;
};