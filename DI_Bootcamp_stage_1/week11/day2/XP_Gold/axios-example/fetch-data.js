const axios = require('axios');
const http = require('http');
const chalk = require('chalk');
const url = 'https://jsonplaceholder.typicode.com/posts'

const server = http.createServer('/posts', (req, res)=>{
    
    // ? which params are solved
    // ? is solution async or sync

    fetch(url)
        .then((req)=>{
            console.log(req);
        })
})

const port = 5000
server.listen(port, ()=>{
    console.log(chalk.cyan(`listening on port: ${port}`));
})


