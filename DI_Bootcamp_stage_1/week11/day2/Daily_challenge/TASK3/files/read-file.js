// const fs = require(`fs`)
import { promises as fs } from 'fs'

export const readFunc = async(path) => {
	try {
		return fs.readFile(path, 'utf-8')
	} catch (error) {
		throw new Error (error.message)
	}	
	};





