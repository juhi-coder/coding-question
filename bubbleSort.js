function bubbleSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j]>arr[j+1])
      {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}

let arr= [10, 5, 20, 8, 12,67,90,6];
console.log(bubbleSort(arr));
