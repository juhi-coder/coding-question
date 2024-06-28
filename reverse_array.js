
function reverseArray(arr)
{
let reverseArr=[];
for(let i=arr.length-1;i>=0;i--)
{
    reverseArr.push(arr[i]);
}
return reverseArr;
}
const arr = [1, 3, 20, 4, 0, 30];
const result=reverseArray(arr);
console.log(result);
