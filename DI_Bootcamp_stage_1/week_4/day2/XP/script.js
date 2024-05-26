// Exeercise 1
// PART I
// function inforAboutMe() {
//     var name = "Ben";
//     var age = "27";
//     var hobbies = "my fingers on the Piano";
//     console.log(`My name is ${name}, I am ${age} and I love ${hobbies}.`);
// }
// PART II
// function inforAboutMe(name, age, hobbies) {
//     console.log(`My name is ${name}, I am ${age} and I love ${hobbies}.`);
// }

// inforAboutMe('Binyamin', 27, 'playing the piano');

// Exercise 2

function calculateTip() {
    bill = Number(prompt(`What is the bill total: `));

    if (bill < 50) {
        finalBill = bill + (bill * 0.20);
        tip = bill * 0.20
    } else if (50 > bill < 200) {
        finalBill = bill + (bill * 0.15);
        tip = bill * 0.15
    } else if (bill > 200) {
        finalBill = bill + (bill * 0.10)
        tip = bill * 0.10
    }

    console.log(`
    Tip = ${Math.ceil(tip)}
    Bill = ${finalBill}
    `);
}

calculateTip();