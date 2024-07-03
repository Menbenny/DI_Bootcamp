//Exercise 1



// Exercise 2
// function displayStudentInfo(objUser){
//     const {first, last} = objUser
//     console.log(first, last);
// }

// displayStudentInfo({first: 'Vic', last: 'Maroth'})

//Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

const arrUsers = Object.keys(users).reduce((arr, key) => {
    arr.push(users[key]);
    return arr;
}, []);

console.log(arrUsers);

const double = arrUsers.map((key, value) => value * 2)
console.log(double);


//Exercise 4
