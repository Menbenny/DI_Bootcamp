// let array = [0,10,20,30,40,50,60]
// // results [50, 60]

// findGreaterThanThree = () => {
//     let newArr = [];
//     for (item of arr) {
//         if (item > 3) newArr.push(item)
//     }
// return newArr
// }

// ! OR

// let filterArr = [0,10,20,30,40,50,60]

// let filterMethod = filterArr.filter(item => {
//     return item > 30
// })

// console.log(filterMethod);

// let users = [
//     { id: 1, name: "John", email: "jjj@gmail.com" },
//     { id: 2, name: "Mor", email: "mmm@gmail.com" },
//     { id: 3, name: "Marry", email: "marry@gmail.com" },
//     { id: 4, name: "Ron", email: "ron@gmail.com" },
//   ];

// filter all useres with 'r' in their name
// Filter method iterates to output all the items that match a given condition

// let filteredNames = users.filter(item => {
//     // passing conditionals after return substitutes if statements
//     // * logic - return if true
//     return item.name.toLowerCase().includes('r') && item.email.includes('r')
// });
// console.log(filteredNames);

// get the user object with id = 3

// let filteredNames = users.filter(item => {
//     return item.id === 3
// });

// * better syntax
// let filteredNames = users.filter((item) => item.id === 3);

//Or find 
// Usually if you want to find the first object that marches the condition  
// let filteredNames = users.find((item) => item.id === 3);

// console.log(filteredNames);



// let sum = array.filter((item) => item++)
// function reduce(arr, num = 0) {
//     let sum = 0;
//     arr.forEach(item => {
//         sum += item;
//     })
//     return sum
// }

// console.log(reduce([1, 2, 3, 4, 5], 100));

// let arr4 = [1, 2, 3, 4, 5];
// let sumOfArr4 = arr4.reduce((total, item)=>{
//     return total + item
// })

// console.log(sumOfArr4);

// ARRAY DESTRUCTURING
// let newArr = [1, 2, 3];
// let a = newArr[0]
// let b = newArr[1]
// let c = newArr[2]
// instead of multiple let

// let [a, b, c] = newArr
// console.log(c,a,b);

//Rest parameters (...rest)
// let newArrRest = [1, 2, 3, 4, 5 ,6, 7, 8]
// let [a, b, ...x ] = newArrRest
// console.log(x);

// // Spread operator
// let aa = 5
// let bb = 6
// let cc = [4, 1]
//combine all into one array
//(rest syntax) CLONE uses similar syntax (...)
// let dd = [aa, bb, ...cc]
// console.log(dd);

// let candles = [2, 8, 4, 4, 8, 1, 8];

// birthdayCakeCanldes = () =>{
    
//     blownCandles = candles.filter((item)=> item > candles.length)
//     console.log(blownCandles.length);
// }

// birthdayCakeCanldes()

// ?###################################################################################################?
// EXERCISE
// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2