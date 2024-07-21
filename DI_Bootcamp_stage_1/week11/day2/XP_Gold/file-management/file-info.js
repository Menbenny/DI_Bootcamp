import fs from 'fs';
import path from 'path';
import { existsSync } from 'node:fs';
import chalk from 'chalk';

export const pathJoin = () => {
    const thePAth = path.join(`./data`,  `/example.txt`)
    console.log(chalk.cyan(thePAth));

    
    // console.log(fileInfo);

    try {
        const fileInfo = fs.statSync('data/example.txt');  
        console.log('Created:', fileInfo.birthtime,'\n','File size: ', fileInfo.size);  
    } catch (error) {
        console.log(error);
    }


    if (fs.existsSync('data/example.txt')){
        console.log(chalk.green('The path exists.'));
    }else {
        console.log(chalk.red('The path does not exist.'));
    }
}


