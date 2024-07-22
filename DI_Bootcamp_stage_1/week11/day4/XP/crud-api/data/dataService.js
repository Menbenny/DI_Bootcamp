const axios = require('axios');
const chalk = require('chalk')
const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts = () => {
    axios.get(url)
    .then(response => {
        if(response.status === 200) {
            console.log(chalk.blueBright('Data successfully retrieved'))
            return response.data
        }
    })
    .catch(error => console.log(error))
}

module.exports = {
    fetchPosts
}