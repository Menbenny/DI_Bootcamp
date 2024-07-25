const express = require('express');
                            // path with double dots - for exiting routes and accessing config - i.e cd .. on CLI
const { products } = require("../config/data.js");
const {deleteProduct, putProduct, nameSearchProduct, postProduct, getAllProducts} = require('../controllers/productsControllers.js');

// Initialize the router
const router = express.Router();

//! switch (app) to router
router.get("/", getAllProducts)

// Function separation - controller
// router.get("/api/products", getAllUsers)
// 
//? Same thing

/** query */
// ! For searching on front end - api search from server backend
// app.get("/api/search", nameSearchProduct)

/** get one product */
/** params */
// router.get("/api/products/:id", getOneProduct)

// DELETE - with splice

// router.delete('/api/products/:id', deleteProduct)

// UPDATE with PUT:
// router.put('/api/products/:id', putProduct)


//! second method - needs fixing 
// router.put('api/products', putProduct)

//RESTFUL API - usgin the sam root  all methods

// router.post('/api/products', postProduct)


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

module.exports = router;
