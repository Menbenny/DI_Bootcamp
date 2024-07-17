// TASK QUEUES

// Priority
// sychronized 


// FETCH
/* 
fetching a url with fetch function
syntax: 
    fetch(url, {})
    ! second parameter is optional (GET method is default, optional paramete is added when a different method is used)
    ! fetch returns a promise

    fetch(url)
    .then(res => {
        log the response
        })
    .catch(err => {
        log the error
        })

    {
    method: "GET" || "POST" || "PUT" || "DELETE"
    headers{
        "content-type": "application/json"
        },
    body: JSON.stringify(data) //! boday data type must match content-type
    mode: "cors"
    }
*/

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//     return res.json();
//     // console.log(res.json());
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

//##########################
//Exercise 

// https://users-18kl.onrender.com/userjson
// inputs on html page
// POST -> name, username, email
// log -> data
// display data on html page
// log data after posting 

// fetch('https://users-18kl.onrender.com/userjson', {POST})
// .then(res => {
//     return res.json();
//     // console.log(res);
// })
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// })

// let name = 'Binyamin'
// let username = 'Ben_G'
// let email = 'benben@gmail.com'

// let dataObj = {name, username, email};

// let url1 =  'https://users-18kl.onrender.com/userjson'

// let options1 = {
//     method: "POST",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify(dataObj)
// }

// fetch(url1, options1)
// .then(response => {
//     return response.text()
// })
// .then(users => {
//     console.log(users);
// })


// ########################################################
/*
async / await    - - - Simplification of the promise syntax (.then, .catch etc)
*/
// getX =()=> {
//     return 5
// }

// console.log(getX());
//result = 5

// async getX = () => {
//     return 5
// }


// async function getY(){
//     return 5
// }
// // returns a promise

// getY().then(res => {
//     console.log(res);
// })


// async function getX(){
//     if (x >5)return x
//     throw new Error(`x is less than 5`)
// };

// AWAIT

// const getX = async () => {
//     return 5
// }

// const getY = async () => {
//     return 6
//     // when REJECT
//     throw new Error(`opps!`)
// };

// // getX().then(res => {
// //     getY()
// //     .then(y => {
// //         console.log(x + y);
// //     });
// // });
// // ! with AWAIT -  function should be async

// const getXY = async () => {
    // let x = await getX()
    // // await resolves the promise
    // console.log(x);
    // let y = await getY()
    // console.log(x+y);
//     //! in order to catch an error
//     try {
//         let x = await getX()
//         console.log(x);
//         let y = await getY()
//         console.log(x+y);
//     } catch (e) {
//         console.log(e);
//     }
// }

// getXY()

// ######################
fetch('https://users-18kl.onrender.com/userjson')
.then(res => {
    return res.json();
    // console.log(res);
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})

const objData = {
    name: "binyamin",
    username: "benben",
    email: "email@gamil.com"
}

asyncFunc = async () => {
    try {
        let response = await fetch('https://users-18kl.onrender.com/userjson', {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({objData})
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}