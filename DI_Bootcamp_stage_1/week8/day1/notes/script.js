// const firstArr = [1, 4, 9, 16];

// const secondArr = firstArr.map((value, index) => value * 2)

// console.log(secondArr);

// const secondArr = firstArr.map((value, index, arr) => {
//     console.log(value);
//     console.log(index);
//     console.log(arr);
    
// })

// function add() {
//     let counter = 0;
//     function plus() {
//         counter += 1;
//         console.log(counter);
//     }
//     plus();
// }
// add();


let add = (function () {
    let counter = 0;
    function calculus() {
        counter += 1;
        return counter
    }
    return calculus
})();

add();

// console.log(secondArr);

// const myArr = [10,20,30,40];

// let newArr = myArr.map((val, i, arr) => {
//     return {
//         value: val,
//         index: i
//     };
// });

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// // const result = words.filter(word => word.length > 6)

// const output = words.filter(letter => letter.includes('y'))
// console.log(output);

