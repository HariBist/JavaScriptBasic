// //higher order functions, call back
//  function sayhello(name,callBack){
// console.log(name)
// callBack()
//  }
  
//   function saygoodbye(){
//     console.log("goodBye")
//   }
// sayhello("hello",saygoodbye)


const fruits =['apple','banana','mango']
// //foreach hof
fruits.forEach(function(fruit){
    console.log(fruit)
})

const numbers =[1,2,3,4,5]
const squreNumbers=[]
numbers.forEach(function(number){
    squreNumbers.push(number **2)
})
console.log(squreNumbers)
 const squredNumbers = numbers.map(function(number){
    return number **2
 })
 console.log(squredNumbers)


const users = [
    {
        id:1, firstname:"hari", lastname:"Bistt",address:"mnr"
    },
    {
        id:2, firstname:"bob", lastname:"marley",address:"mnr"
    },
    {
        id:3, firstname:"Manish", lastname:"bhatt",address:"mnr"
    }
]
users.forEach((user)=>{
    console.log(user.firstname)
})