// Node model system
// after exporting a function, it can be imported into any file.

const hello = (name) => {
	console.log(`Hello, ${name}`)
}


const sum = (a, b) => {
	console.log(a + b);
}

module.exports = {
	hello,
	sum
};
