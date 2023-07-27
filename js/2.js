//TEMPLATE STRINGS
const firstName = "John"
const lastName = "Lark"
let getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

const mGreetings = `Hello ${getFullName(firstName,lastName)+ 100}`