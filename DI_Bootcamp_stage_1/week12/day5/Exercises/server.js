const express = require('express')
const app = express()
const router = require('./routes/router.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const port = 5000
app.listen(port, ()=>{
    console.log(`listening to port: ${port}`);
})

app.use("/tasks", router)