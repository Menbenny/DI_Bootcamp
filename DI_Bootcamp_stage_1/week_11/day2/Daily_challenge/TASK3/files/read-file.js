const read = require(`fs`)

const readFunc = () => {
	read.readFile('file-data.txt', 'utf8', (err, data) => {
		if(err) {
			console.error(`File not read`);
			return
		}
		console.log(data);
	});
}

module.exports = readFunc


