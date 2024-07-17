// function getX(f) {
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             res(5);
    
//         }, 4000)
//     })
    
// }

// getY = (f) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(6)
   
//        }, 5000)
//     })
    
// }

// console.log('before'); 

// getXY = () => {
    // let x = getX();
    // console.log(x);
    // x.then((valX) => {
    //     console.log(valX);;
    //     let y = getY();
    //     y.then((valY) => {

    //         console.log(valX + valY);
    //     })
    // })

//     //! Shorter
//     getX().then((x) => {
//         getY().then((y) => {
//             console.log(x + y);
//         })
//     })
// };

// getXY();
// console.log('after');

// asynchronous appraoch -- PROMISE
// a promise is fulfilled by either resolve or reject
// either it is kept or not, otherwise status is pending 

// let p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     resolve(5)
//    }, 3000)
// });

// console.log(p);

// //resolve promise syntax
// p.then(data => {   // data is a callblack function 
//     console.log(data);
// })

// let auth = (param) => {
//     return new Promise((res, rej) => {
//         if (param === 'admin') {
//             res('authorize')
//         } else {
//             rej('unauthorize')
//         }
//     });
// };

// auth('user')
// .then((data) => {
//     console.log('res', data);
// })
// .catch((data) => {
//     console.log('error');
// })


// const flip = () => {
//     const coin = Math.floor(Math.random() * 3)
//     return coin < 2 ? coin === 0 ? 'head' : 'tail' : 'side'
// };


// console.log(flip());

// const flipCoin = new Promise((res, rej) => {
//     setTimeout(() => {
//         const coinSide = flip();
//         if (coinSide === 'head' || coinSide === 'tail') {
//             res('You win ' + coinSide)
//         }else{
//             rej('you loose ' + coinSide)
//         }
//     }, 2000);
// });

// flipCoin
// .then( result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })

const arr = [
    { username: "aaa", email: "aaa@gmail.com" },
    { username: "bbb", email: "bbb@gmail.com" },
    { username: "ccc", email: "ccc@gmail.com" },
  ];

// FIRST ATTEMPT  
// getDataFromServer = (arr) => {
//     return new Promise((res, rej) => {
//         setTimeout(()=> {
//            res(JSON.stringify(arr));
//            console.log(data);
//         }, 2000)
//     });
// };

// getDataFromServer(arr)
// .then(data => {
//     const array = JSON.parse(data);
//     console.log(data);
// })
// .catch(error => {
   
//     console.log(error);
// })

//CORRECTION 
//1
const getDataFromServer = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(arr) {
                resolve(JSON.stringify(arr));
            }
            else {
                reject('404 no data found')
            }
        }, 2 * 1000)
    });
};
//2
getDataFromServer()
.then(res => {
    return JSON.parse(res)
})
.then( data => {
    console.log(data);
    render(data)
})
.catch(err => {
    console.log(err);
})

const render = (arr) => {
    const html = arr.map(item => {
        return `<div>${item.username}, ${item.email}</div>`
    });
    document.getElementById('root').innerHTML = html.join("");
}