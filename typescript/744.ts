function nextGreatestLetter(letters: string[], target: string): string {
    const n = letters.length
    if (target >= letters[n - 1]) return letters[0];
    let left = 0;
    let right = letters.length - 1;
    let mid: number;
    const goal = target.charCodeAt(0) + 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        const code = letters[mid].charCodeAt(0)
        if (code === goal) {
            return letters[mid]
        } else if (code > goal) {
            right = mid - 1
        } else {
            left = mid + 1;
        }
    }
    return letters[left]
};