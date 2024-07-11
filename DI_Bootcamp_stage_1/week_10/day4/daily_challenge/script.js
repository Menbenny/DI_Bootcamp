const apiKey = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
const gifForm = document.getElementById('gifForm');
const input = document.getElementById("categoryInput");
const deleteAllButton = document.getElementById('deleteAllButton')
const displayDiv = document.getElementById('display');


const searchButton = document.getElementById('searchButton')


gifForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const inputCategory = input.value.trim();
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${inputCategory}`;

    if (inputCategory) {
        const gif_URL = await fetchRandomGIF(url);
        if (gif_URL) {
            appendGif(gif_URL)
        }
    }
    
});

deleteAllButton.addEventListener('click', () => {
    displayDiv.innerHTML = '';
})


const fetchRandomGIF = async(url) => {
    
    
    
    const options = {
        method: "GET",
        headers: {"Content-type": "application/json"}
    
    };

    try {
        let response = await fetch(url, options);
        let result = await response.json(); 
        return result.data.images.original.url;
        // return console.log(result);;
        
    } catch (error) {
        console.log(`Error fetching GIF`, error);
    }
}

const appendGif = (url) => {
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

// appendGif(url)
