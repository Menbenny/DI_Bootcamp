const { log } = require('console');
const fs = require('fs');

// ! Synchronized
// try {
//     // extension doesn't matter 
//     const data = fs.readFileSync('text.json', 'utf-8')
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }
// console.log("before");
//! Asynchronized 
// fs.readFile('text.json', 'utf-8', (err, data)=> {
//     if(err) return console.log(err);

//     console.log(data);
// })

// console.log("after");

// ! writeFile OVERWRITES data inside an existing file -
// ! writeFile can also create a new file 
fs.writeFile('text.json', '{"anotherName": "anotherOne", "anotherAge": "anotherOldie"}', 'utf-8', (err) => {
    if(err) return console.log(err);

    console.log("File written");
})