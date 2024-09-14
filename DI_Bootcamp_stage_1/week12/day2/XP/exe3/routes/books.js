const express = require('express')
const router = express.Router()

// routes/books.js

// Sample in-memory database for storing books
const sampleBooks = [
    {
        title: 'book1',
        author: 'author1',
        yearPublished: '2001'
    },
    {
        title: 'book2',
        author: 'author2',
        yearPublished: '2002'
    },
    {
        title: 'book3',
        author: 'author3',
        yearPublished: '2003'
    }
];

// Get all books
router.get("/books", (req, res)=>{
    res.json(sampleBooks)
})

// Add a new book
router.post("/books", (req, res)=>{
    const { id } = req.body
 

    const newBook = {
       id: sampleBooks.length + 1,
        title ,
        author,
        yearPublished
    };

    sampleBooks.push(newBook);
    res.status(201).json(newBook)
})

// Update a book by ID
router.put("/books/:id", (req, res)=>{
    const { id } = req.body;
    const { title, author, yearPublished } = req.body;

    const index = sampleBooks.findIndex((book)=> book.id == id)

    const updatedBook = {
        
        id: sampleBooks[index].id,
        title : sampleBooks[index].title,
        author: sampleBooks[index].author,
        yearPublished: sampleBooks[index].yearPublished
    }

    sampleBooks[index] = updatedBook;

    res.json(updatedBook);
});

// Delete a book by ID
router.delete("/books", (req, res)=>{
    const { id } = req.params;

    const index = sampleBooks.findIndex((book)=> book.id == id)

    if(index === -1) {
        res.status(404).send('book not found')
    }
    
    const deleteBook = sampleBooks.splice(index, 1);

    
    res.json(deleteBook)
})

module.exports = router