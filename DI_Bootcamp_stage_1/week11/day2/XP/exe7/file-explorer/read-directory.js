const fs = require('fs');

const dirPath = `./file-explorer`;
const fileList = fs.readdirSync(dirPath);

console.log(fileList);

// CLI - command : node .\file-explorer\read-directory.js from dir exe7