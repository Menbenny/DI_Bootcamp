// const fs = require(`fs`)
import fs from 'fs'

export const readFunc = () => {
	fs.readFile('./TASK3/files/file-data.txt', 'utf8', (err, data) => {
		if(err) {
			console.error(`File not read`);
			return
		}
		console.log(data);
	});
}




