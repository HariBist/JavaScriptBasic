//the filter() function takes an array and returns a new array with only the value that meet certain criteria. It also does not mutate the original array. It is oftern used to select a subset of data from an array based on certain criteria.

// Example 1: You can use filter() to return only the odd numbers from an array of numbers.

const arr = [1,2,4,3,5,6,7]
const result=arr.filter((num)=>num%2==0)
console.log(result)


//Example 2: You can use filter() to return only the users having age greater than 30 in an array.

const users =[
    {
firstName:'john', lastName:'Bhatt', age: 32
},
{
    firstName:'hari', lastName:'bist', age: 31
    },
    {
        firstName:'joshyamhn', lastName:'Bhatt', age: 30
        },
        {
            firstName:'bob', lastName:'Bhatt', age: 29
            }
];
const output = users.filter((user)=>{
    return user.lastName.endsWith("bist") && user.age>30
})
console.log(output);