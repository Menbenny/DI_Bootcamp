const mathFunc = require('lodash')

const mulAB = (a, b) => {
    return _.multiply(a, b)
}

const addAB = (a, b) => {
    return _.add(a, b)
}

module.exports = {
    mulAB,
    addAB
}