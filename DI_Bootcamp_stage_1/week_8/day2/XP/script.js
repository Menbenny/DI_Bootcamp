// // exercise 1
// const sum = (a, b) => {return console.log(a + b)}
// sum(22,81)


// exercise 2
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// // ? Can be called before they are defined
// function kgToGrams(weightInKg){
//     return weightInKg * 1000
// }
// console.log(kgToGrams())

// // ? Not hoisted hence cannot be called before being defined 
// const kgToGramsExpression = function(weightInKg) {
//     return weightInKg * 1000
// }

// const kgToGramsArrow = (weightInKg) => {return weightInKg * 1000};
// console.log(kgToGramsArrow())

// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function(numberOfChildren, partnerName, geographicLocation, jobTitle){
//     const div = document.querySelector('div');
//     div.innerHTML = `<p>You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren}</p>`
// })(2, 'Gabby', 'Haifa', 'Software engineer');

/*
Exercise 4 : Welcome
Instructions
John has just signed in to your website and you want to welcome him.

Create a Bootstrap Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture.
*/

// (function (userName) {
//     const nav = document.querySelector('nav')
//     const navDiv = document.createElement('div')
    
//     nav.appendChild(navDiv)
    
//     navDiv.innerHTML = `Welcome ${userName} <img style="border-radius:999px" src="https://picsum.photos/50" alt="userPhoto">`



// })('Mary')
/*

🌟 Exercise 5 : Juice Bar
Instructions
You will use nested functions, to open a new juice bar.

Part I:
The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


Part II:
In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
*/


//part 1

function makeJuice(juiceSize){
    function addIngredients(firstIngredient, secondIngredient, thirdIngredient){
        const div = document.querySelector('div')
        const sentence = document.createElement('p')
        div.appendChild(sentence)
        sentence.innerHTML = `The client wants a ${juiceSize} juice with ${firstIngredient}, ${secondIngredient} and ${thirdIngredient} `
    }
    addIngredients('lemon', 'pineapple', 'mango')
}
makeJuice('large')