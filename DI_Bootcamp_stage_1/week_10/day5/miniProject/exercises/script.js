const findButton = document.getElementById('findButton');
const displayDiv = document.getElementById('display');
// console.log(randomNumber);



// ? with each click - run a loop which iterates over the values of the API array in the URL:`https://www.swapi.tech
findButton.addEventListener('click', (event) => {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 83 ) + 1;
    let fetchURL =  `https://www.swapi.tech/api/people/${randomNumber}`
    findSomeoneFunction = async(fetchURL) => {
        try {
            let response = await fetch(fetchURL);
            let data = await response.json()
            const character = data.result.properties

            console.log(character);

            const worldUrl = character.homeworld
            let res = await fetch(worldUrl)
            let worldData = await res.json()
            const homeWorldname = worldData.result.properties.name
            console.log(`home: ${homeWorldname}`);

            displayDiv.innerHTML = '';

            const nameTag = document.createElement('h1');
            nameTag.textContent = `${character.name}`;
            const height = document.createElement('h4');
            height.textContent = `Height: ${character.height}`;
            const gender = document.createElement(`p`);
            gender.textContent = `Gender: ${character.gender}`
            const birthYear = document.createElement(`p`);
            birthYear.textContent = `Birth year: ${character.birth_year}`;
            const homeWorldTag = document.createElement(`p`);
            homeWorldTag.textContent = `Home world: ${homeWorldname}`

            displayDiv.appendChild(nameTag)
            displayDiv.appendChild(height)
            displayDiv.appendChild(gender)
            displayDiv.appendChild(birthYear)
            displayDiv.appendChild(homeWorldTag)

            

            return console.log(displayDiv);

        } catch (error) {
            console.log(`fetch error`);
        }
        homeWorldFunc(worldUrl)
    }
    
    findSomeoneFunction(fetchURL)
});





