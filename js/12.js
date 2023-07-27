//INHERITANCE

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getDetails = () =>{
        return `Name: ${this.name}, Age:${this.age}`
    }
}

class Pilot extends Person{
    constructor(name,age,exp, type, license){
        super(name,age)
        this.experience = exp
        this.type = type
        this.license = license
    }

    getData = () => {
        console.log(`${this.getDetails()} Experience ${this.experience} and Type ${this.type}`)
    }
}

const p = new Pilot('Jacob', 22, 10, 'private', 'MI123')
p.getData()
console.log(p)

const toto = new Pilot('Toto wolf', 25, 5, 'commercial','MI9876')
console.log(toto)