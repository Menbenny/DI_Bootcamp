const express = require('express')

const productRouter = require('./routes/productRouter.js')
// const dotenv = require('dotenv')
// // Now you can read configuration file of the server from the environment 
// dotenv.config()
//  - - - SHORT

require('dotenv').config()

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// log just for testing
// console.log(process.env);

//  -- listener from the environment (dotenv) --
const serverPort = process.env.PORT || 3001
app.listen(serverPort, ()=> {
    console.log(`Running on ${serverPort}`);
})

app.use('/products', productRouter);