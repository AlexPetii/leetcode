function construct2DArray(original: number[], m: number, n: number): number[][] {
    let result: number[][] = [];

    if (original.length === m * n) {
        for (let i = 0; i < original.length; i += n) {
            result.push(original.slice(i, i + n));
        }
    }
    return result;
};