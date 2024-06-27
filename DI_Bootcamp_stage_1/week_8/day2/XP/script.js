// exercise 1
const sum = (a, b) => {return console.log(a + b)}
sum(22,81)


// exercise 2
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// ? Can be called before they are defined
function kgToGrams(weightInKg){
    return weightInKg * 1000
}
console.log(kgToGrams())

// ? Not hoisted hence cannot be called before being defined 
const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000
}

const kgToGramsArrow = (weightInKg) => {return weightInKg * 1000};
console.log(kgToGramsArrow())

// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
