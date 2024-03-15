// //higher order functions, call back
//  function sayhello(name,callBack){
// console.log(name)
// callBack()
//  }
  
//   function saygoodbye(){
//     console.log("goodBye")
//   }
// sayhello("hello",saygoodbye)


// const fruits =['apple','banana','mango']
// // //foreach hof
// fruits.forEach(function(fruit){
//     console.log(fruit)
// })

// const numbers =[1,2,3,4,5]
// const squreNumbers=[]
// numbers.forEach(function(number){
//     squreNumbers.push(number **2)
// })
// console.log(squreNumbers)
//  const squredNumbers = numbers.map(function(number){
//     return number **2
//  })
//  console.log(squredNumbers)


// const users = [
//     {
//         id:1, firstname:"hari", lastname:"Bistt",address:"mnr"
//     },
//     {
//         id:2, firstname:"bob", lastname:"marley",address:"mnr"
//     },
//     {
//         id:3, firstname:"Manish", lastname:"bhatt",address:"mnr"
//     }
// ]
// // users.forEach((user)=>{
// //     console.log(user.firstname + user.lastname)
// // })
// const result = users.map((user)=>{
// return {
//     // id : user.id,
//     // firstname : user.firstname,
//     // lastname : user.lastname,
//     ...users,
//     fullname : user.firstname + user.lastname,
// }
// })
// console.log(result)

// const number2 = [1,2,3,4];
// const name =["A","B","C","C"]
// const result = number2.map((number)=>//question can ask on interview
// {
//     return {
//     number : number,
//     name : name[0]
//     }
// })
// console.log(result)



//filter it also return the  the truth  value

// const number3 = [ 1,3,4,6,7,5,8,10,21]
// const num =number3.filter((number)=>{
//     return number%2==0
// })
// console.log(num)


// const books = [{
//     title : "mahabir pun",
//     author :"Mahabir pun",
//     year : 2020
// },
// {
//     title : "lekhnath pun",
//     author :"lektnapur pu",
//     year : 2000 
// },
// {
//     title : "manish",
//     author :"manish pu",
//     year : 2022
// },
// {
//     title : "hello",
//     author : "2",
//     year: 2000
// },
// {
//     title : "book3",
//     author :"Mahabir pu",
//     year : 1910
// }
// ]
// const result=books.filter(function(book){
//     return book.author.endsWith("Mahabir pun")
//  })
// console.log(result)

// const files = ["app.js","index.js","script.js","style.css","apple.js"]
// const output =files.filter((file)=>{
//     return file.endsWith('.js')
// })
// console.log(output)



//  const data =[10,null,'hari', null,"rekha",20]
//  const output = data.filter((data)=>{
//     return data !==null && data !==10
//  })
//  console.log(output)



//reduce

// const numbers = [1,2,3,4,5]
//  const result = numbers.reduce(function(a,b){//(accumulator,currentValue)
//     return a +b
//  },0)
//  console.log(result)


//  const cartItems =[
//     {
//         name: "product A",
//         quanity :2,
//         price: 3
//     },
//     {
//         name: "product C",
//         quanity :4,
//         price: 200
//     },
//     {
//         name: "product B",
//         quanity :2,
//         price: 400
//     }
//  ]

//  //find total quantatiy and amount

//  const res = cartItems.reduce(function(accumulator,currentProduct){
// accumulator.totalprice=accumulator.totalprice + (currentProduct.quanity * currentProduct.price)
// accumulator.totalquanity += accumulator.quanity 
// return accumulator
//  },{totalprice:0, totalquanity:0})
//  console.log(res)


//group kasari banauney

// const people =[
//     {
//         name: 'hari' ,age:22
//     },
//     {
//         name: 'shyam' ,age:20
//     },
//     {
//         name: 'naresh' ,age:23
//     },
//     {
//         name: 'mohan' ,age:22
//     },
//     {
//         name: 'parkash' ,age:23
//     }
// ]
// const result = people.reduce(function(accumulator,person){
//    const age = person.age
//    if(!accumulator[age]){
//     accumulator[age]=[]
//    }
//    accumulator[age].push(person)
//    return accumulator
// },{})
// console.log(result)

