//callback function that function that passes as an argument to HOF
//HOF are the function that that takes one or more function as argument or return a function  as result
//eg forEach, map, reduce

//finding the area and parameter of circle

// 

//now using HOF(higher order function)

const radious=[1,2,4];

function area(radious){
    return Math.PI*radious*radious;
}
function diameter(radious){
    return 2*radious;
}
function calculate(radious,logic){
    const result=[];
    for(let i=0; i<radious.length;i++)
    {
        result.push(logic(radious[i]))
    }
    return result
}
console.log(calculate(radious,area));
console.log(calculate(radious,diameter));

