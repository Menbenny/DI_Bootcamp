// !  ######   SERVER   ######

const express = require('express');
const app = express();
const chalk = require('chalk');

//body parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get('/', (__dirname + 'index.html'))
// app.get('/about', (__dirname + 'about.html'))
// // app.use('/', (functionImportFromRoutes))

// export modules

//! _________ PORT ____________
const port = 5000
app.listen(port, ()=> {
    console.log(chalk.cyanBright(`running on port: ${port}`));
});

