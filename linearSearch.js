function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }return -1;
}

let arr= [10, 5, 20, 8, 12,25];
const target=25;
const index=linearSearch(arr,target);
console.log(index);