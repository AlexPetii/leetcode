/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let first = 0
    let second = height.length - 1
    let maxWater = 0

    while(first < second){
        let width = second - first
        if(height[first] < height[second]){
            let area = width * height[first]
            maxWater = Math.max(maxWater, area)
            first++
        }else {
            let area = width * height[second]
            maxWater = Math.max(maxWater, area)
            second--
        }
    }
    return maxWater
};