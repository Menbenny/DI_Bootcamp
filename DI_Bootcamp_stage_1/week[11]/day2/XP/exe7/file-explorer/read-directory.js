const fs = require('fs');

const dirPath = `./file-explorer`;
const fileList = fs.readdirSync(dirPath);

console.log(fileList);