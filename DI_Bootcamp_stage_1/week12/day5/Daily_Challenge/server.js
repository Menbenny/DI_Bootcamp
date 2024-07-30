const express = require('express')
const router = require('./routes/router.js')
const app = express()
const port = 5001

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port, ()=>{
    console.log(`running on port: ${port}`);
})

app.use('/', router)
