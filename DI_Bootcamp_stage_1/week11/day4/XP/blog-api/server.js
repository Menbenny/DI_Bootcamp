const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();

let blogs = [
    {
        id: 1,
        title: "blog 1",
        content: "blog 1 content"
    },
    {
        id: 2,
        title: "blog 2",
        content: "blog 2 content"
    },
    {
        id: 3,
        title: "blog 3",
        content: "blog 3 content"
    },
    {
        id: 4,
        title: "blog 4",
        content: "blog 4 content"
    }
]
//? #############################################################
//! return list of blogs
// app.get("/posts", (req, res)=>{

//     console.log(req.query);
//     res.send(blogs)

// })

//? ############################################################
//! return id based blog  
// app.get("/api/posts", (request, response) => {
//     console.log(request.query);

//     const { id } = request.query;
//     const myBlog = blogs.find(blog => blog.id == id)

//     if(!myBlog) return response.status(404).json({msg: "blog not found"})

//     response.json(myBlog)
// })

//?###################################################################
//! Create new blog post 
// app.post('/api/posts', (request, response)=>{

//     const { title, content } = request.body;

//     if(!title || !content) {
//         return response.status(404).json({msg: `Please include a title and content`})
//     }

//     const newBlog = {
//         id: blogs.length + 1,
//         title,
//         content
//     };

//     blogs.push(newBlog)

//     response.status(201).json(newBlog)
// });

//? ###############################################################
// ! update an existing blog post
app.put('/api/posts/:blogs', (req, res)=> {
    res.send("PUt request posts")
})




//!_________________________________________________________________________________________PORT: _____________________________________
const port = 5000

app.listen(port, ()=> {
    console.log(`Port: ${port}`);
})
