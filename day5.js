//DOM(Data Object Model)
const hh1= document.querySelector('.h1')
// hh1.textContent=('bye world')
console.log(hh1)
const button = document.getElementsByTagName('button')[0]
button.textContent="hello"
button.addEventListener('click',()=>{
    hh1.textContent="bye world"
   var newparagraph= document.createElement('p')
   newparagraph.textContent ="learning Dom"
   document.body.appendChild(newparagraph)
})