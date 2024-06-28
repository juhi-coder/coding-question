function sortedArray(arr)
{
    return arr.sort((a,b)=>a-b);
}

function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return -1;
}

let arr=[10, 5, 20, 8, 12];
let sortedArrayElement=sortedArray(arr);
const target=12;
console.log(binarySearch(sortedArrayElement,target));