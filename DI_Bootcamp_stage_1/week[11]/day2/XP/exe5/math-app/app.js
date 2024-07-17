const mathFunc = require('lodash')
const {addAB, mulAB} = require('./math')


// console.log(addAB(4, 2) )
 _.reduce([1, 2], function(sum, n) {
    return sum + n;
 }, 0);