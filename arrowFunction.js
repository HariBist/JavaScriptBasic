// Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable. Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable.

// let friends = function()
// {
//     console.log('madhan')
// }
// friends()


// let myfunction = (a,b) => a*b;
// console.log(myfunction(2,3))

//  function myfunction(a,b)
// {
//     return(a*b)
// }
// console.log(myfunction(4,5))

// //arrow function return value default
//  hello = () => "hello world"
// console.log(hello());

// //arrow function without parameters
// goodmorning = (val) =>"hello" + val;
// console.log(goodmorning("  sathii"))
//  const x =(x,y) => x*y
//  console.log(x(2,4))


// let x=10;//to see the difference between const and let the value of let is changed but not const
// let y= 30;// if we assign const insted of let =>assignment to constant variable at boject.anonmyous
// let z=y+x;
// x=z
// console.log(x)
// console.log(subtract())
//arrow function can't be hoisted they must be difined before they used
//  subtract = () => 5-2;
//  console.log(subtract())


num();  //this is called hoisting, before defined fucntionn it call and normal function can hoisted
function num(){
 console.log("hello world")
//  console.log(a);
}
console.log(num)
// add(2,4);
const add = function(a,b)
{
    return a+b;

}
add(2,4);
// console.log(add(2,4))
console.log(add)
