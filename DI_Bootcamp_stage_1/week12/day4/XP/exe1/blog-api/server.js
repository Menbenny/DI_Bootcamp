const express = require('express');
const app = express()
const dotenv = require('dotenv');
const routes = require('./routes')

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.json())

app.use('/posts', routes.posts);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: `Server error`});
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    
})
