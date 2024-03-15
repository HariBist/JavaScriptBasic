// map() function takes an array of values and applies a transformation to each value in the array.
//it does not mutate the original array. It is used to transform an array of data into a new array with different stracture.

const arr=[1,2,3,4,5];
const output = arr.map(function(num){
    return num+=10   
})
// console.log(arr);
// console.log(output);

//Example 2: Here we have an array of users. Suppose we only want their first and last name. We can simply use the map() method to extract it from the users array.

const users =[
    {
firstName:'john', lastName:'Bhatt', age: 33
},
{
    firstName:'hari', lastName:'bist', age: 33
    },
    {
        firstName:'joshyamhn', lastName:'Bhatt', age: 33
        },
        {
            firstName:'bob', lastName:'Bhatt', age: 33
            }
]
const fullname = users.map((user)=>
  user.firstName +" "+user.lastName
)
console.log(fullname);
