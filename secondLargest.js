function secondlargest(arr){
    if(arr.length<2){
        throw new Error('array must contain atleast two elements');
    }

    let first=-Infinity;
    let second=-Infinity;
   
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>first){
            
            second=first;
            first=arr[i];
        }
        else if(arr[i]>second && arr[i]!=first){
           
            second=arr[i];
        }
        
    }
    return second;
}

let arr= [10, 5, 20, 8, 12,7,8,12,10,15];
let secondLargetElement=secondlargest(arr);
console.log(secondLargetElement);