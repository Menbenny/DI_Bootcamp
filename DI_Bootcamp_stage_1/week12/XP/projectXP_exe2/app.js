const express = require('express');
const chalk = require('chalk')
const app = express();
const port = 3000

app.listen(port, ()=>{
    console.log(chalk.cyanBright(`running on port ${port}`));
})