//ARROW FUNCTIONS
function greetings(name){
    return `Welcome ${name}`
}

const greetingsA = (name, age) =>{
    return `Welcome ${name} ${age}`
}
//arrow functions has implicit return hook
const greetingsB = name => `Welcome ${name}`

console.log(greetingsA("john",8))
console.log(greetingsB("john"))