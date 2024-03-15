//The reduce() method, you should is used it when you want ot perform some operationn on the elements of an array and return a single value as a rsult.
//The single value refers to the accumulated result of repeatedly applying a function to the elements of a sew\quence.
//eg.You might use reduce() to sum up all the elements in array to find the maximum or minimum value, to merge multiple objects into a single object, or to group different elements in an array.



//Example 1: Using reduce() to sum up all the elements in an array:

const arr = [1,3,5,6,7]
const result = arr.reduce(function(sum,currentvalue){
    return sum+currentvalue
},0)
// console.log(result)

//eg2: using reduce finding the maximum value in an array

let number=[233,3,56,34,199,1];
const maxValue = number.reduce((max,currentV)=>{
    if(currentV>max)
    max = currentV;
return max;
})
console.log(maxValue)
