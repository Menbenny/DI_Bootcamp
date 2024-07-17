// COMMON JS
// const {greet} = require('./TASK1/greetings');
// const {message} = require('./TASK2/colorful-message');
// const {readFunc} = require('./TASK3/files/read-file');

//ES6 moduleJS

import {greet} from './TASK1/greetings';
import {message} from './TASK2/colorful-message';
import {readFunc} from './TASK3/files/read-file';

const userName = 'User';
const greetMessage = greet(userName)

console.log(message(greetMessage));