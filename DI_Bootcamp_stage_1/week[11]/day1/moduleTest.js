// require from a file where there is module export

//const obj = require(`./nodeTest.js`);

//console.log(obj.sum(3, 4))
//obj.hello(`MenacBen`)

// Destructured

const {hello, sum} = require(`./nodeTest.js`);

hello(`Menac`)
sum(22, 22)
