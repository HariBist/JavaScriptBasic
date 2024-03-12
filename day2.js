
// const numbers = [1,2,3,4,5]
// slice-->> used to create a copy of a portion of the Array. it dosen't modify original
// Array.
// slice(startindex,endindex) where startindex inclusive and endindex is exclusive.
// const newarray = numbers.slice(1,4);
// console.log(numbers)
// console.log(newarray);

// ----splice--- it modify the original array
// let spliceNumbers = numbers.splice(2,1,34,5)
// console.log(spliceNumbers)
// console.log(numbers)

//split: it helps a sting to convert in array according its 
// let text = "l love javascript"
// const arraynew = text.split(" ")
// console.log(arraynew)
// console.log(arraynew.length)


// const person = {
//     name: "Hari Bista",
//     addresss: "Mahendranagar ,Kanchanpur",
//     age :32
// }
// Object.freeze(person)//it prevent the modify the object from outside
// person.country = "nepal"//these value are not added on person object after using freez method.
// person.age=22
// console.log(person)
// // console.log(Object.keys(person))
// console.log(Object.values(person))


//Conditional in Javascript--

// const isRanning = true
// if(isRanning)
// {
//     console.log('carry umbrella')
// }
// else
// {
//     console.log("not need to carry umbrella")
// }
// const temp = 30
// if(temp>30)
// {
//     console.log("it is hot outsider")
// }
// else if(temp>25 && temp<=30) {
//     console.log("it is plesent outside")
// }
// else {
//     console.log("it is cold")
// }
 

//ternary operator
// const isRaining = true;
// const result = isRaining ? "Carry umbrella":"Dont carry Umbrella"

//short circuit evaluation
// const result = isRaining && "Carry umbrella" || "Don't carry"
// console.log(result)
// let isloggedIn = false
// const name = isloggedIn && "Authenticated" ||"not authenticated"
// console.log(name)
// //output: Authenticated
// const harry= true;
// const result = harry ? "real name" : 'facke name'
// console.log(result)
// console.log(harry ? "my  name is khan" :"im not khan")
// //short circuit
// console.log(harry && "my name is harry")



//nullish coelescing operator
let age= null
console.log(age ?? "no age")