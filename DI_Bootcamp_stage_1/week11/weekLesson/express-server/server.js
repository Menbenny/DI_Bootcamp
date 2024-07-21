const express = require("express");
const chalk = require('chalk');
const bp = require('body-parser') // ! NO need - Library is within expressJS
const { products } = require("./config/data.js");

// ! to get directory path - common JS - dirname is in place of path 
// const path = require('path');
// const __dirname = path.resolve()

// console.log(products);

const app = express();

// ? ##################   Which library to use for parsing - true 
// app.use(bp.urlencoded({extended:true}));
// app.use(bp.json());

// ! body parser is imbedded within - EXPRESS - hence:
app.use(express.urlencoded({extended:true}))
app.use(express.json())





app.get("/api/products", (req, res) => {
  res.json(products);
});

/** get one product */
/** params */
app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  const myprod = products.find((item) => item.id == id);

  if (!myprod) return res.status(404).json({ msg: "product not found" });

  res.json(myprod);
});

/** query */
// ! For searching on front end - api search from server backend
app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    // return res.sendStatus(404);
    return res.status(404).json({msg: 'no product match your search'})
  }
  res.json(filtered);
});

// DELETE - with splice

app.delete('/api/products/:id', (req, res)=> {
  const id = req.params;

  const index = products.findIndex((item)=> item.id == id)

  if(index === -1) {
    return res.status(404).send('product not found')
  }

  products.splice(index, 1)

  res.json(products)
});

// UPDATE with PUT:
// app.put('/api/products/:id', (req, res)=>{
//   const { id } = req.params;
//   const { name, price} = req.body;

//   const index = products.findIndex((item)=> item.id == id);

//   if(index === -1){
//     return res.status(404).json({message: "product not found, can't update"})
//   }

//   products[index] = {
//     //clone the product object with a new name - because of same key and value
//     ...products[index],
//     name:name,
//     price:price 
//   };

//   res.json(products)
// });



//! second method - needs fixing 
// app.put('api/products', (req, res)=> {
//   const id = Number(req.query.id);
//!                                       - should be double ==
//   const index = products.findIndex((item) => item.id == id);



//   const updatedProduct = {
//     ...req.body, 
//     name: req.body.name,
//     price: req.body.price
//   }

//   products.push(updatedProduct)
//   res.json(products)
// })

//RESTFUL API - usgin the sam root  all methods

// app.post('/api/products', (req, res)=>{
//   console.log(req.body);

//   //add to products:

//   const newProduct = {...req.body, id: products.length + 1};
//   products.push(newProduct)
//   res.json(products)

//   //! response can be sent only ONCE - else - server crushes 
//   // res.send('Ok from post')
// });


// ! POSTMAN is used instead of fetching 
// const url = 'localhost:5001/api/products'
// with fetch:
// fetch('localhost:5001/api/products', {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json'
//   }
//   // body: JSON.stringify({name})
// })

/**
 * app.get()
 * app.post()
 * app.put()
 * app.delete()
 */

// app.get("/users", (req, res) => {
//   let users = [
//     { name: "John", age: 401 },
//     { name: "Anne", age: 45 },
//     { name: "Marry", age: 21 },
//   ];
//   //   res.status(404).json(users);
//   res.sendStatus(404);
// });

// app.post("/users", (req, res) => {
//   res.send("hello form users route 1 ");
// });

// ?#################### SENDING HTML FILES through server path

console.log(__dirname + '/public');

// !   root is by default index.html
app.use('/', express.static(__dirname + '/public'))

app.get('/home', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html')
});

// app.get('/about', (req, res)=>{
//   res.sendFile(__dirname + '/public/about')
// });






//!___________________________________PORT_______________________________________

app.listen(5001, () => {
  console.log("run on 5001");
});