const findButton = document.getElementById('findButton')
const url = `https://www.swapi.tech/`

// findButton.addEventListener('submit', (event) => {
//     event.preventDefault();

//     findSomeoneFunction = async(url) => {
//         try {
//             let response = await fetch(url);
//             let data = await response.json()
//             return console.log(data);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// })

findSomeoneFunction = async(url) => {
    try {
        let response = await fetch(url);
        let data = await response.json()
        return console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

findSomeoneFunction()


