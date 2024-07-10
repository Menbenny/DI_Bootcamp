const input = document.getElementById("categoryInput");
const category = input.value.trim().toLowerCase()
const gifForm = document.getElementById('gifForm');

const deleteAllButton = document.getElementById('deleteAllButton')
const apiKey = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
const searchButton = document.getElementById('searchButton')
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;

searchButton.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    if (category) {
        const gif_URL = await fetchRandomGIF(category);
        if (gif_URL) {
            appendGif(gif_URL)
        }
    }
    
});

deleteAllButton.addEventListener('click', () => {
    displayDiv.innerHTML = '';
})


const fetchRandomGIF = async(category) => {
    
    const options = {
        method: "GET",
        headers: {"Content-type": "application/json"}
    
    };

    try {
        let response = await fetch(url, options);
        let result = await response.json(); 
        return result.data.images.fixed_height.url;
        // console.log(result);
    } catch (error) {
        console.log(`Error fetching GIF`, error);
    }
}

appendGif = (url) => {
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
    const displayDiv = document.getElementById('display').appendChild(gifItem);
    // displayDiv.appendChild(gifItem);
}

// appendGif(url)
fetchRandomGIF(category)