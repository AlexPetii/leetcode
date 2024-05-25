function getNextCharIndx(str: string, index: number): number {
    let backspaceCount = 0;

    while (index >= 0) {
        if (str[index] === "#") {
            backspaceCount++;
        } else if (backspaceCount > 0) {
            backspaceCount--;
        } else {
            break;
        }
        index--;
    }
    return index;
}

function backspaceCompare(s: string, t: string): boolean {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = getNextCharIndx(s, i);
        j = getNextCharIndx(t, j);

        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }

        if ((i >= 0) !== (j >= 0)) {
            return false;
        }
        i--;
        j--;
    }
    return true;
};