//SPREAD OPERATOR
let mArr1 = [1,2,3,4,5]
let mArr2 = [...mArr1]
let mArrConcat = [6,7,8]

//let mArr3 = mArr1.concat(mArrConcat)

let mArr3 = [...mArr1, ...mArrConcat]
mArr1.push(6)

console.log(mArr1)
console.log(mArr2)
console.log(mArr3)

let obj1 = {
    name : "John"
}

let obj2 = {
    age :23
}

let obj3 = {...obj1, ...obj2}
console.log(obj3)