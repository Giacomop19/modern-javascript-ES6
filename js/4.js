//REST OPERATOR

//const mSum = (num1, num2) => console.log(num1 + num2)

const mSum = (...args) => console.log(args)

const mSum1 = (num1, num2, ...args) => {
    console.log(num1)
    console.log(num2)
    console.log(args)
    let sum = num1 + num2
    for (let index = 0; index < args.length; index++) {
        sum += args[index]        
    }
    console.log(sum)
}

mSum(1,2,3,4,5)
mSum1(1,2,3,4,5,6,7)