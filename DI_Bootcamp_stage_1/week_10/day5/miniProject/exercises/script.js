const findButton = document.getElementById('findButton');
const displayDiv = document.getElementById('display');

findButton.addEventListener('click', (event) => {
    event.preventDefault();

    let randomNumber = Math.floor(Math.random() * 83 ) + 1;
    let fetchURL =  `https://www.swapi.tech/api/people/${randomNumber}`;

    findSomeoneFunction = async(fetchURL) => {
        try {
            let response = await fetch(fetchURL);
            if (!response.ok) {
                throw new Error (`Oh no! That person isn't available`)
            }
            let data = await response.json()
            const character = data.result.properties
            
            
            const worldUrl = character.homeworld
            let res = await fetch(worldUrl);
            if (!res.ok) {
                throw new Error (`Home world not found`)
            }
            let worldData = await res.json()
            const homeWorldname = worldData.result.properties.name

            displayDiv.innerHTML = '';

            const nameTag = document.createElement('h4');
            nameTag.textContent = `${character.name}`;
            const height = document.createElement('p');
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
    }    
    findSomeoneFunction(fetchURL)
});





