function minMax(arr) {
  if (arr.length < 2) {
    throw new Error("length should be atleast more than 2");
  }
  let max = -Infinity;
  let min = Infinity;
  arr.forEach((element)=> {
    if (max < element) {
      max = element;
    }
    if (min > element) {
      min = element;
    }
  });

  return { max, min };
}
const arr = [1, 3, 20, 4, 0, 30];
const value = minMax(arr);
console.log(value.min, value.max);
// max-20,min-0
