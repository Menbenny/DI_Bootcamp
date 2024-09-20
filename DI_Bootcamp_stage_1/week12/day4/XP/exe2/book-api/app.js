const express = require('express');
const app = express();


app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
];

app.get('/api/books', (req, res)=> {
    res.status(200).json(books);
});

app.get('/api/books/:bookId', (req,res)=> {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((b) => b.id === bookId);

    if(!book) {
        return res.status(404).json({ message: 'Book not found'});
    }

    res.status(200).json(book);
});

app.post('/api/books', (req, res)=> {
    const { title, author, publishedYear} = req.body;

    if(!title || !author || !publishedYear)  {
        return res.status(400).json({message : 'Title, author and publish year are required'})
    }

    const newBook = {
        id: books.length+1,
        title,
        author,
        publishedYear
    };
    
    books.push(newBook);
    res.status(201).json(newBook);
})

app.put('/api/books/:bookId', (req,res) => {
    const bookId = parseInt(req.params.bookId);
    const { title, author, publishedYear} = req.body;

    const bookIndex = books.findIndex((b) => b.id === bookId)
    if(bookIndex === -1) {
        return res.status(404).json({message: 'Book not found'});
    }

    books[bookIndex] = { id: bookId, title, author, publishedYear};
    res.status(200).json(books[bookIndex]);
});


app.delete('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if(bookIndex === -1) {
        return res.status(404).json({message: 'Not found'});
    }

    books.splice(bookIndex, 1);
    res.status(200).json({message: 'Book deleted'});
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`);
    
});

