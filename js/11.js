//CLASSES

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getDetails = () =>{
        return `Name: ${this.name}, Age:${this.age}`
    }
}

let P = new Person('Jack', 22)
console.log(P.getDetails())