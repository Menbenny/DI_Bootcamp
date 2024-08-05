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
    res.json()
})

// Add a new book
router.post("/books", (req, res)=>{
    const { id } = req.body
    const index = sampleBooks.findIndex((book)=> book.id == id)

    // if(!index === -1) {

    // }

    const newBook = {
        ...req.body,
        title : title,
        author: author,
        yearPublished: yearPublished
    }

    sampleBooks.push(newBook)
    res.json(sampleBooks)
})

// Update a book by ID
router.put("/books", (req, res)=>{
    const { id } = req.body
    const index = sampleBooks.findIndex((book)=> book.id == id)

    const newBook = {
        ...req.body,
        id: id[index] + 1,
        title : title,
        author: author,
        yearPublished: yearPublished
    }
})

// Delete a book by ID
router.delete("/books", (req, res)=>{
    const { id } = req.body
    const index = sampleBooks.findIndex((book)=> book.id == id)

    if(index === -1) {
        res.status(404).send('book not found')
    }
    
    books.splice(index, 1)
    res.json(books)
})

module.exports = router