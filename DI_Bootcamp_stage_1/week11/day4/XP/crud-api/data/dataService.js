const axios = require('axios');

const fetchPosts = async() => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error, `Data not found`);
    }
}

fetchPosts()