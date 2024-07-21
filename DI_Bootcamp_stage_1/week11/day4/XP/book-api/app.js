const express = require('express');
const chalk = require('chalk');
const app = express();
const bp = require('body-parser')

const books = [
    {
        id: 1,
        title: "Book1",
        author: "author1",
        publishedYear: 2001
    },
    {
        id: 2,
        title: "Book2",
        author: "author2",
        publishedYear: 2002
    },
    {
        id: 3,
        title: "Book3",
        author: "author3",
        publishedYear: 2003
    },
]

// ! body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ###### -- funtional -- ########
// app.get('/api/books', (req, res)=>{
//     res.status(200).json(books)
// })


// ###### -- funtional -- ########
// ! retrieve data by id 
// app.get('/api/books', (req, res)=>{
//     const id = Number(req.query.id)
//     const book = books.find((book)=> book.id===id)

//     if(!book){
//         res.status(404).send('<div style="color: red";backgroundcolor="black">Book not found!</div>')
//     }
//     res.status(200).json(book)
// })


// ###### -- funtional -- ########
//! create
// app.post('/api/books', (req, res)=>{
    
//     // worked after defining ://! id
//     const id = req.query.id
//     const newBook = {...req.body, id:books.length+1}
//     books.push(newBook);
//     res.status(201).json(books)
// })


const port = 5000;
app.listen(port, ()=>{
    console.log(chalk.cyanBright(`Listening on port: ${port}`));
})
