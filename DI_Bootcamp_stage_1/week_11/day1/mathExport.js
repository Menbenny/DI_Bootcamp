// Create basic math function, export and require - console.log with parameters 

function sumAB(a, b) {
    return a+b
}

function minAB(a, b) {
    return a-b
}

function mulAB(a, b) {
    return a * b
}

function devAB(a, b) {
    return a / b 
}


module.exports = {
    sumAB,
    minAB,
    mulAB,
    devAB
}