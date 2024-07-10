const input = document.querySelector("input")
const theValue = input.value
const button = document.querySelector("button")

button.addEventListener("click", () => {
    event.preventDefault();
    console.log(theValue);
});

const API_Key = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
const url = `https://api.giphy.com/v1/gifs/random/${API_Key}`;
const options = {
    method: "GET",
    body: JSON.stringify({theValue}),
    headers: "Content-type", "application/json"
}

const fetchRandomGIF = async() => {
    try {
        let response = await fetch(url, options);
        let result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

fetchRandomGIF()