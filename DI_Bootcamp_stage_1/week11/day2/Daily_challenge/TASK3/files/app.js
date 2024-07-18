// const readFunction = require(`./read-file`)
import {readFunc} from './read-file.js'

try {
    let data = await readFunc('./file-data.txt')
    console.log(data);
} catch (error) {
    console.log(error);
}

