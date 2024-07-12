const findButton = document.getElementById('findButton');
const displayDiv = document.getElementById('display');
// console.log(randomNumber);


// ? with each click - run a loop which iterates over the values of the API array in the URL:`https://www.swapi.tech
findButton.addEventListener('click', (event) => {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 83 );
    let fetchURL =  `https://www.swapi.tech/api/people/${randomNumber}`
    findSomeoneFunction = async(fetchURL) => {
        try {
            let response = await fetch(fetchURL);
            let data = await response.json()
            const character = data.result.properties
console.log(character);
            displayDiv.innerHTML = '';

            const nameTag = document.createElement('h1');
            nameTag.textContent = `${character.name}`;
            const height = document.createElement('h4');
            height.textContent = `Height: ${character.height}`;
            const gender = document.createElement(`p`);
            gender.textContent = `Gender: ${character.gender}`
            const birthYear = document.createElement(`p`);
            birthYear.textContent = `Birth year: ${character.birth_year}`;
            const homeWorld = document.createElement(`p`);
            homeWorld.textContent = `Home world: ${character.homeworld}`

            displayDiv.appendChild(nameTag)
            displayDiv.appendChild(height)
            displayDiv.appendChild(gender)
            displayDiv.appendChild(birthYear)
            displayDiv.appendChild(homeWorld)

            return console.log(displayDiv);

        } catch (error) {
            console.log(`fetch error`);
        }
        
    }
    
    findSomeoneFunction(fetchURL)
    // console.log(character.height);

    // DOM
    /*
    name
    height
    geneder
    birthyears
    home land
    */


})




// Get info from API and catch the errors 
// get random poeple in the api between the number 1 and 88
// i.e randomNumber variable & apiURL

// ajax xhr = new XMLHttpRequest();
/*
ajax syntax:
    open
    responseType
    send()
    onload = function(){
            if(//! set a status value conditional -- i.e status != 200)
                updateInfoError();

                console.log(`there was an error`)
        }else {
         updateInfo(xhr.response);
        }

    function updateInfo(){
        
    }
*/




