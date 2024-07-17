const fs = require('fs');
// const { log } = require('util');
const sourceFile = `source.txt`
const readFromSource = () =>{
    fs.readFile(sourceFile, 'utf-8', (err, data) => {
        if(err) {
            console.log(err, `File not read`);
        }
        console.log(data);
    });
}

const writeFile = () => {
    fs.writeFile(`destination.txt`, sourceFile, (err)=> {
        if (err) {
            console.log(err, `File not written`);
        }
    });
}

readFromSource()
writeFile()




