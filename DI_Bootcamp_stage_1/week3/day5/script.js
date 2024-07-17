// let num;

// for (let i = 0; i <= 15; i ++) {
//     if (i % 2 == 0) {
//         console.log(`${i} is an even number`)
//     } else {
//         console.log(`${i} is an odd number`)
//     };
// }

let names = ["john", "sarah", 23, "Rudolf",34];



for (let i in names) {
    if (typeof names[i] === 'string') {
        console.log(names[i]);
    }
    if (names[1][0] === names[1][0].toUpperCase()) {
        console.log(i);
    } 
};


