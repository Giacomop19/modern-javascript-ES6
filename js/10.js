//ARRAY FUNCTIONS : find() / findIndex()

const arr = [-1,-2,-3,-4,1,2,3,4]

let result = arr.find(item =>{
    return (item % 2 === 0 && item >= 0)
})

let resultI = arr.findIndex(item =>{
    return (item % 2 === 0 && item >= 0)
})

console.log(result)
console.log(resultI)