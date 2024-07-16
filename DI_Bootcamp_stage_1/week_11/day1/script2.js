const {getUsers} = require(`./exercise.js`)

// ! With then
// getUsers(`https://jsonplaceholder.typicode.com/users`).then((users) => {
//     console.log(users);
// })
// console.log(getUsers)

// ! with await (ASYNC FUNCTION)

getInfo = async() =>{
        let data = await getUsers(`https://jsonplaceholder.typicode.com/users`)
       console.log(data);
}

getInfo();

