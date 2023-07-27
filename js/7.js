//ARRAY FUNCTIONS : map()

const mArr = [1,2,3,4,5]

// let newArr = []

// const doubleValues = (val) => {
//     return val*2; //doubling the value of each element in array using arrow function.
// }

// for (let index = 0; index < array.length; index++) {
//     newArr.push(doubleValues(mArr[index]))
// }

let newArr = mArr.map((val, i) => { //map passes 2 values, 1st the current value and 2nd the index position
    console.log(`Item at pos: ${i} is ${val}`)
   return val*2
})

console.log(newArr)

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

let newArrP = pArr.map((data) => {
    return {
        name : data.name,
        type : data.type
    }
})
console.log(newArrP)