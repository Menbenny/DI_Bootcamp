const express = require('express');
const chalk = require('chalk');
const { randomNumber } = require('./functions');
const { emojis } = require('../data/emojis');
const port = 5000
// --- Call the data.js and functions -- //

const app = express()
app.use(express.urlencoded({extended:true}));
app.use(express());

// app.get('/api/emoji', (req, res)=>{

//     const index = emojis.findIndex((emoji) => emoji.Object.keys == Object.keys)

//     res.console.log(index);

//     // res.json(generateEmoji)
// })

// fetch(`http://localhost:${port}/api/emojis`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     }

// })

app.get(`/api/emojis/:id`, (req, res)=>{
    const { id } = req.params
    
    //!first option index
    const index = randomNumber();

    // ! second option index
    // const index = emojis.findIndex((emoji)=>{
    //     emoji.randomNumber == id
    // });

    if(index === -1) {
        // ! Error message
        // console.log(emojis[index]);
    }
    //? Success
    res.json(Object.entries(emojis[index]))
});




 //!_____________PORT_________________________
 
 app.listen(port, ()=>{
    console.log(chalk.cyan(`running on: ${port}`));
 })