// !  ######   SERVER   ######

const express = require('express');
const app = express();
const chalk = require('chalk');

// app.use('/', (functionImportFromRoutes))









// export modules


//! _________ PORT ____________
const port = 5000
app.listen(port, ()=> {
    console.log(chalk.cyanBright(`running on port: ${port}`));
});

