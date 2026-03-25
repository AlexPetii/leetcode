function plusOne(digits: number[]): number[] {
    for (let i = digits.length-1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    return [1, ...digits]
};

console.log(plusOne([9]),plusOne([1,4,8,7]), plusOne([1,3,3,6]))