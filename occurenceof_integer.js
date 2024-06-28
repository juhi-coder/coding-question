function occurenceOfInteger(arr, k) {
  let count = 0;
  arr.forEach((element) => {
    if (k === element) {
      count++;
    }
  });
  return count;
}
const arr = [1, 3, 20, 4, 12, 1, 1, 1, 2, 3, 4, 5, 1,2, 2, 30, 1];
const k = 2;
const result = occurenceOfInteger(arr, k);
console.log(`occurence of ${k} is ${result}`);
