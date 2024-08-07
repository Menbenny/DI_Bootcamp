const findButton = document.getElementById('findButton');
const displayDiv = document.getElementById('display');

/*
 * @description
 * @param {*} num
 * @param {*}
 * @returns
 * @author
 * @created
 * @updated
 * @updates
*/

function randomNumber(num, start = 0) {
    Math.floor(Math.random() * num ) + start;
}
 /*
  *
  * 
  */
randomNumber(83, 1)

findButton.addEventListener('click', (event) => {
    event.preventDefault();

    loaderIcon();
    
    // ! BEST practice is to separate this function into global scope. 
    // const randomNumber = Math.floor(Math.random() * 83 ) + 1;
    const fetchURL =  `https://www.swapi.tech/api/people/${randomNumber}`;

    const findSomeoneFunction = async(fetchURL) => {
        
        try {
            const response = await fetch(fetchURL);
            if (!response.ok) {
                throw new Error (`data not found!`)
            }
            const data = await response.json()
            const character = data.result.properties 
            const worldUrl = character.homeworld
            
            const res = await fetch(worldUrl);
            const worldData = await res.json()
            const homeWorldname = worldData.result.properties.name

            displayDiv.innerHTML = '';

            const nameTag = document.createElement('h4');
            const height = document.createElement('p');
            const gender = document.createElement(`p`);
            const birthYear = document.createElement(`p`);
            const homeWorldTag = document.createElement(`p`);

            nameTag.textContent = `${character.name}`;
            height.textContent = `Height: ${character.height}`;
            gender.textContent = `Gender: ${character.gender}`;
            birthYear.textContent = `Birth year: ${character.birth_year}`;
            homeWorldTag.textContent = `Home world: ${homeWorldname}`;

            displayDiv.appendChild(nameTag)
            displayDiv.appendChild(height)
            displayDiv.appendChild(gender)
            displayDiv.appendChild(birthYear)
            displayDiv.appendChild(homeWorldTag)

        } catch (error) {
            console.log(`fetch error`);
        } 
    }    
    findSomeoneFunction(fetchURL)
});

const loaderIcon = () => {
    displayDiv.innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse"></i> <p>Loading...</p>`;
}






