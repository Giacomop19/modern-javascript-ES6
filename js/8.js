//ARRAY FUNCTIONS : reduce()

const numArr = [1,2,3,4,5]
const pArr = [
    {
        name : 'John',
        age : 20,
        type : "M"
    },
    {
        name : 'Nick',
        age : 10,
        type : "M"
    },
    {
        name : 'Elizabeth',
        age : 5,
        type : "F"
    }
]

let result = numArr.reduce((acc, item) => {
    console.log(item)
    console.log("acc" , acc)
    return acc + item;
}, 0)

let resultP = pArr.reduce((acc, item) => {
    return acc + item.age
}, 0)

console.log("result", result)
console.log("resultP" , resultP)