const express = require('express')
const app = express()
const port = 5001

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port, ()=>{
    console.log(`Running on port: ${port}`);
})