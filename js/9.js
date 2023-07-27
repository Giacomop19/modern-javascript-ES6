//ARRAY FUNCTIONS : filter()

const numArr = [1,2,3,4,5,6,7]
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

let result = numArr.filter(item => {
    console.log(item)
    return item % 2 == 0
})

let resultP = pArr.filter(item => {
    console.log(item.age)
    return item.age <= 10
})

console.log(result)
console.log(resultP)