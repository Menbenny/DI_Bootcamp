// PART 1
const express =require('express');
const axios = require('axios');
const app = express()
const port = 5000

app.listen(port, ()=>{
    console.log(chalk.cyan(`Running on port: ${port}`));
})

//PART 2
/*
Part 2: Creating a Data Module for Axios
Inside the crud-api directory, create a new directory named data.
Inside the data directory, create a new file named dataService.js.
In dataService.js, import the axios module and create a 
function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.
Export the fetchPosts function.

Part 3: Using the Data Module in the Express App
Inside app.js, import the dataService module you created.
Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.
Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts
Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.
*/

