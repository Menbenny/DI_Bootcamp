// ! Not setting an extension - NodeJS with append (`.js`/ `.json`/ `.txt`) to the file being required

const {readFile, writeFile} = require(`./fileManager.js`)

const helloWorldPath = `./Hello_world.txt`
const byeWorldPath = `./Bye_world.txt`

readFile(helloWorldPath)
    .then((data)=> {
        
        return console.log(`Data of the hello_world.txt`, data);
    
    })
    .catch((error)=>{
        console.error(error, `Error executing`);
    });

writeFile(byeWorldPath)
    .then((data)=> {
       return  console.log(data, `written to the file bye_world.txt`);
    })
    .catch((error)=> {
        console.log(error, `error writing to the file `);
    });

