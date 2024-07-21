const fs = require('fs');
const sourceFile = `source.txt`

const readFromSource = () =>{
    fs.readFile(sourceFile, 'utf-8', (err, data) => {
        if(err) {
            console.log(err, `File not read`);
        }
        console.log(data);
        const writeFile = () => {
            fs.writeFile(`destination.txt`, data, (err)=> {
                if (err) {
                    console.log(err, `File not written`);
                }
            });
        }
        writeFile()
    });
}

readFromSource()





