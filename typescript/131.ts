function partition(s: string): string[][] {
    function isPalindrome(sub: string): boolean {
        return sub === sub.split('').reverse().join('');
    }

    function bactrack(start: number, path: string[]): void {
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.substring(start, end);
            if (isPalindrome(substring)) {
                path.push(substring);
                bactrack(end, path);
                path.pop();
            }
        }
    }

    const result: string[][] = [];
    bactrack(0, []);
    return result;
}