function peakElement(nums) {
  function binarySearch(left, right) {
    if (left == right) {
      return left;
    }
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return binarySearch(left, mid);
    }
    return binarySearch(mid + 1, right);
  }
  return binarySearch(0, nums.length - 1);
}

const nums = [1, 3, 20, 4, 1, 0];
const peakIndex = peakElement(nums);

console.log(
  `Peak element is at index: ${peakIndex}, value: ${nums[peakIndex]}`
);
