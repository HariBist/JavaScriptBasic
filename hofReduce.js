//The reduce() method, you should is used it when you want ot perform some operationn on the elements of an array and return a single value as a rsult.
//The single value refers to the accumulated result of repeatedly applying a function to the elements of a sew\quence.
//eg.You might use reduce() to sum up all the elements in array to find the maximum or minimum value, to merge multiple objects into a single object, or to group different elements in an array.



//Example 1: Using reduce() to sum up all the elements in an array:

const arr = [1,3,5,6,7]
const result = arr.reduce(function(sum){
    return sum+=sum
})
console.log(arr)
console.log(result)