//? Instructions
//? 1rst Daily Challenge
//? Create two functions. Each function should return a promise.
//? The first function called makeAllCaps(), takes an array of words as an argument
//? If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//? else, reject the promise with a reason.
//? The second function called sortWords(), takes an array of words uppercased as an argument
//? If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// ? else, reject the promise with a reason.

// let testArray = ['learning', 'java', 'at', 'developers', 'institute'];
// let upper = testArray.map(testArray => testArray.toUpperCase());
// console.log(upper);

// for (let x = 0; x < testArray.length; x ++) {
//     // console.log(testArray[x]);
//     const upperCase = testArray.map(testArray => {
//         testArray.toUpperCase()
//     })
//     console.log(upperCase);
// }



// console.log(upper);

// const makeAllCaps = (arr) => {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < arr.length; i++) {
//            if (typeof(arr[i]) !== 'string') {
//             reject(`Not all items inside the array are strings`) 
//             return
//            } 
//         };

//         let caps = arr.map(arr => arr.toUpperCase());
//         resolve(caps)
        
//     });
// };

// let arr = ['here', 'we', 'go', 'again!'];

// makeAllCaps(arr)
// .then(result => {
//     console.log(result);
// })
// .catch(result => {
//     console.log(result);
// })

// const sortWords = (arr) => {
//     return new Promise((resolve, reject) => {
//         if (arr.length > 4) {
//             resolve(arr.sort())
//         }
//         else {
                //! Start reject error string with ERROR
//             reject(`Error: Array length less than 4`)
//         }
//     });
// };

// sortWords(['emanuel', 'floyd', 'claire', 'danny', 'ava', 'bobby'])
// .then(result => {
//     console.log(result);
// })
// .catch(result => {
//     console.log(result);
// })


                                            // #### CLASS REVISION #####
let words = ['here', 'we', 'go', 'again!'];

function makeAllCaps(words){
    return new Promise((resolve, reject) => {
        let every = words.every(word => typeof word === 'string')
        if(every) {
            resolve (words.map((word) => word.toUpperCase()))
        } else {
            reject('error: Not all words are strings')
        }
    });
}

makeAllCaps(words)
.then((uppercaseWords) => {
    console.log(uppercaseWords);
})
.catch((err) => {
    console.log(err);
})