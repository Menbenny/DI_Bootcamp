/*
🌟 Exercise 1 : Comparison
Instructions
Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than or equal to 10
the promise rejects if argument is greater than 10.
Test: */

// compareToTen = (num) => {
//     return new Promise((resolve, reject) => {
//         if(num <= 10) {
//             resolve(`promise resolves`)
//         }
//         else {
//             reject(`Promise rejects`)
//         }
//     });
// };



//In the example, the promise should reject
// compareToTen(15)
// .then(result => console.log(result))
// .catch(error => console.log(error))

/*
//In the example, the promise should resolve
compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))


🌟 Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.

*/

// selfResolve = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Success`)
//         }, 4 * 1000)
//     });
// };

// selfResolve()
// .then(result => console.log(result));



/*


🌟 Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
*/

// const proResolve = (value) => {
//     return new Promise((resolve, reject) => {
//         if (value === 3) {
            
//             resolve(`success`)
//         } else {
//             reject(`Boo!`)
//         }
//     });
// };

// proResolve(2)
// .then(value => {
//     console.log(value);
// })
// .catch(result => {
//     console.log(result);
// })

//* ALTERNATIVE METHOD -- Best Practice

const resolvedPromise = Promise.resolve(3);
const rejectPromise = Promise.reject("Boo!")

rejectPromise
.then((value)=> {
    console.log(value);
})
.catch((error)=> {
    console.log(error);
})

// #####

// const selfResolve = new Promise((resolve, reject) => {


//         resolve(3);
//         reject(`Boo`)
//     });

//     console.log(Promise.resolve(value));

// selfResolve.then(value => {
//     console.log(value);
// })
// selfResolve.catch(result => {
//     console.log(result);
// })

/*

Exercise 4: Quizz - Not Mandatory
Follow this tutorial and do the quizz until the page called “a few tricks with promises”.


*/