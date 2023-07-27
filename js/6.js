//DESTRUCTURING

const name = "John Manuel Lark"
const nameArr = name.split(' ')

console.log(nameArr)

// let firstName = nameArr[0]
// let middleName = nameArr[1]
// console.log(firstName,middleName)

// let [firstName,middleName] = nameArr
//destructuring assignment
// console.log(`First Name: ${firstName} Middle Name:${middleName}`)

// const person = {
//     firstName : 'John',
//     middleName : 'Manuel',
//     lastName : 'Lark',
//     age : 28
// }

// let {firstName, lastName} = person

// console.log(firstName)
// console.log(lastName)

let firstName = 'John'
let lastName = 'Lark'
let age = 28

const personObj = {
    firstName,
    lastName,
    age
}
console.log(personObj);
