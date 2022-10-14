const numero = 15
const ehMultiploDe3 = numero % 3 === 0
const ehMultiploDe5 = numero % 5 === 0

if(ehMultiploDe3 && ehMultiploDe5){
    console.log("FizzBuzz")
} else if (ehMultiploDe3) {
    console.log("Fizz")
} else if (ehMultiploDe5) {
    console.log("Buzz")
} else {
    console.log(numero)
}