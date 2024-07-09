//? Instructions
//? 1rst Daily Challenge
//? Create two functions. Each function should return a promise.
//? The first function called makeAllCaps(), takes an array of words as an argument
//? If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//? else, reject the promise with a reason.
//? The second function called sortWords(), takes an array of words uppercased as an argument
//? If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// ? else, reject the promise with a reason.

// const makeAllCaps = (arr) => {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i]);
//             if (typeof(arr[i]) === String) {
//                 resolve(arr[i].toUpperCase());
//                 console.log(toUpperCase(arr[i]));   
//             }
//             if (typeof(arr[i]) === !String){
//                 reject(`Not all items in array are a string`)
//             }
//         }
//     });
// };

// makeAllCaps(['here', 'we', 'go', 'again!', 1])
// .then(result => {
//     console.log(result);
// })
// .catch(result => {
//     console.log(result);
// })

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve(arr.sort((a, b) => a - b))
        }
        else {
            reject(`Array length less than 4`)
        }
    });
};

sortWords(['emanuel', 'floyd', 'claire', 'danny', 'ava', 'bobby'])
.then(result => {
    console.log(result);
})
.catch(result => {
    console.log(result);
})