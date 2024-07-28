const express = require("express");
const chalk = require('chalk');
const bp = require('body-parser') // ! NO need - Library is within expressJS
const { products, users } = require("./config/data.js");
const productsRouter = require('./routes/productsRouter.js');
const usersRouter = require('./routes/usersRouter') 
// const { users } = require('./config/data.js')

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

// logger - every request goes through logger  - middleware 
const logger = (req, res, next) => {
  console.log(req.url, req.method);

  // authorization / Authentication 
  if(req.url === '/products'){
    return res.send('haha, you are not authorized')
  }
  
  next();
};

// middleware is a func getting request, response and next (continues) executing the cascading file order

const auth = (req, res, next)=>{
  const { admin } = req.query;
  if(admin === 'yes') {
    next();
  }else {
    res.send("you are not authorized");
  }
}
app.use(logger);
app.use(auth);

// Prouct endpoints


/**
 * app.get()
 * app.post()
 * app.put()
 * app.delete()
 */


// ?#################### SENDING HTML FILES through server path

// console.log(__dirname + '/public');

// // !   root is by default index.html
// app.use('/', express.static(__dirname + '/public'))

// app.get('/home', (req, res)=>{
//   res.sendFile(__dirname + '/public/index.html')
// });

// app.get('/about', (req, res)=>{
//   res.sendFile(__dirname + '/public/about')
// });


//###############################################################################################
// week11 - day5 - Lesson
// after adding users in config data.js





//!___________________________________PORT_______________________________________

app.listen(5001, () => {
  console.log("run on 5001");
});

// ADD ROOTS - Roots means no path is added in the router files - // ! Creates the base path for router files
app.use('/products', productsRouter);
app.use('/users', usersRouter);