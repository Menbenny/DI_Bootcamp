const http = require(`http`);
const { listeners } = require("process");

//built in method create server - with callback func (req, res)
const server = http.createServer((req, res)=>{

    let users = [
        {name: "Ava", age: 33},
        {name: "Bob", age: 13},
        {name: "Carl", age: 23}
    ] 

    res.end(JSON.stringify(users))
});

// Default - localhost
let port = 5000
server.listen(port, () => {
    console.log(`Port: ${port}`);
})