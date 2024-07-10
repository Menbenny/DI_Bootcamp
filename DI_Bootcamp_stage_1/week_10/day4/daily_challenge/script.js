const input = document.querySelector("input")
// const theValue = input.value.toLowerCase()
const displayDiv = document.getElementsByClassName('display')
// const submitButton = document.querySelector("button")
const deleteAllButton = document.getElementById('deleteAllButton')
const API_Key = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
const url = `https://api.giphy.com/v1/gifs/random/?api_key=${API_Key}&tag=${category}`;
const options = {
    method: "GET",
    headers: {"Content-type": "application/json"}
    
}


button.addEventListener("submit", async (event) => {
    event.preventDefault();
    const category = input.value.trim().toLowerCase()
    if (category) {
        const gif_URL = await fetchRandomGIF(category);
        if (gif_URL) {
            appendGif(gif_URL)
        }
    }
    // console.log(theValue);
});

deleteAllButton.addEventListener('click', () => {
    displayDiv.innerHTML = '';
})


const fetchRandomGIF = async(category) => {
    try {
        let response = await fetch(url, options);
        let result = await response.json(); 
        return result.result.images.fixed_height.url;
        // console.log(result);
    } catch (error) {
        console.log(`Error fetching GIF`, error);
    }
}

appendGif = () => {
    const gifItem = document.createElement('div');
    gifItem.classList.add(`gif-item`);

    const img = document.createElement(`img`);
    img.src = url;
    gifItem.appendChild(img);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = `DELETE`;
    deleteButton.addEventListener('click', () => {
        gifItem.remove();
    });
    gifItem.appendChild(deleteButton);

    displayDiv.appendChild(gifItem);
}

// fetchRandomGIF()