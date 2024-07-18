const express = require(`express`)
const {products} = require(`./config/data.js`)
const chalk = require(`chalk`)

const app = express();

app.listen(5001, () =>{
    console.log(chalk.blue(`Port: 5001`));
})

// /api/produts/PARAMS - syntax  (:id)
// PARAM - //? inserting column and naming

app.get("/api/products/:id", (req, res)=>{

// app.get("/api/products", (req, res)=>{
    console.log(req.params);
    const { id } = req.params;

    const myprod = products.find(items => items.id == id)

    if(!myprod) return res.status(404).json({msg: "Product not found"})

    res.json(myprod)
})

// Another way of getting data from the request
app.get(`/api/search`, (req, res) => {
    console.log(req.query);

    const { name } = req.query;

    const filtered = products.filter((item) => {
        return item.name.toLowerCase().includes(name.toLocaleLowerCase())
    });

    if(filtered.length === 0) {

        // ! after sendStatus -- nothing can be chained 

        // ! Either
        // return res.sendStatus(404)

        // ! OR
        return res.status(404).json({msg: `No product found`});
    }
    res.json(filtered)
    // res.send("ok");
})
// app.get("/users", (req, res) => {

//     let users = [
//         {name: "john1", age: "11"},
//         {name: "john2", age: "22"},
//         {name: "john3", age: "33"},
//         {name: "john4", age: "44"}
//     ]
//     res.send(users);

    //Request can be ended with status too
    // res.sendStatus(201)
    //res.sendStatus(404)
    
// });

// console.log(products);
