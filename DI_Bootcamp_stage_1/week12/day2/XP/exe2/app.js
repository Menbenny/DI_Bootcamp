const express =require('express')
const app = express()
const port = 5001
const chalk = require('chalk')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ---- port ---
app.listen(port, ()=>{
    console.log(chalk.cyanBright(`Running on port: ${port}`));
})