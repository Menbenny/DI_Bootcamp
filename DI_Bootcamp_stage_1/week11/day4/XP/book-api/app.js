const express = require('express');
const chalk = require('chalk');
const app = express();

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

app.use(express.json())
app.get('/api/books', (req, res)=>{
    res.status(200).json(books)
})

// app.get('/api/books', (req, res)=>{
//     const id = Number(req.query.id)
//     const book = books.find((book)=> book.id===id)

//     if(!book){
//         res.status(404).send('<div style="color: red";backgroundcolor="black">Book not found!</div>')
//     }
//     res.status(200).json(book)
// })

// app.post('/api/books', (req, res)=>{
//     const id = Number(req.query.id);
//     const index = books.findIndex((book)=>book.id ===id)

//     if(index === -1){
//         res.status(404).send('Book not found')
//     }

//     const newBook = {
//         id: books[index].id,
//         title: req.body.title,
//         author: req.body.author,
//         publishedYear: req.body.publishedYear
//     }

//     books.push(newBook);
//     res.status(201).json({msg: "Book created"})
// })



const port = 5000;
app.listen(port, ()=>{
    console.log(chalk.cyanBright(`Listening on port: ${port}`));
})
