function arraySorting(arr) {
  // return arr.sort((a,b)=>a-b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
         ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]);
      }
    }
  }
  return arr;
}
const arr = [1, 3, 20, 4, 0, 30];
const result = arraySorting(arr);
console.log(result);
