/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < m && p2 < n) {
    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
    } else {
      result.push(nums2[p2]);
      p2++;
    }
  }

  while (p1 < m) {
    result.push(nums1[p1]);
    p1++;
  }

  while (p2 < n) {
    result.push(nums2[p2]);
    p2++;
  }
  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
  return result;
};
