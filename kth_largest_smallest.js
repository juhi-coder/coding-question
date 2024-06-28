function kthLargestSmallest(arr, k) {
  let uniqueArray = Array.from(new Set(arr));
  uniqueArray.sort((a, b) => a - b);

  let smallest = uniqueArray[k - 1];
  let largest = uniqueArray[uniqueArray.length - k];

  return { smallest, largest };
}

function withoutInBuilt(arr, k) {
  let uniqueArray = [];
  //remove duplicate
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  //sorting
  for (let i = 0; i < uniqueArray.length; i++) {
    for (let j = 0; j < uniqueArray.length - i - 1; j++) {
      if (uniqueArray[j] > uniqueArray[j + 1]) {
        [uniqueArray[j], uniqueArray[j + 1]] = [uniqueArray[j + 1], uniqueArray[j]];
      }
    }
  }
  console.log(uniqueArray);
  let smallest = uniqueArray[k - 1];
  let largest = uniqueArray[uniqueArray.length - k];

  return { smallest, largest };
}
const arr = [1, 3, 20, 4, 12, 30];
let k = 3;
const result = kthLargestSmallest(arr, k);
console.log(`smallest-${result.smallest}`);
console.log(`largest-${result.largest}`);

console.log('..............................................');
const result1 = withoutInBuilt(arr, k);
console.log(`smallest-${result1.smallest}`);
console.log(`largest-${result1.largest}`);
//3-largest=12,3-smallest=4
