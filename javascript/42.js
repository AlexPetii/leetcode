/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (h) {
    let left = 0
    let right = h.length - 1
    let water = 0
    let left_max = 0
    let right_max = 0

    while (left < right) {
        if (h[left] < h[right]) {
            if (h[left] >= left_max) {
                left_max = h[left]
            } else {
                water += left_max - h[left]
            }
            left++
        } else {
            if (h[right] >= right_max) {
                right_max = h[right]
            } else {
                water += right_max - h[right]
            }
            right--
        }
    }
    return water
};