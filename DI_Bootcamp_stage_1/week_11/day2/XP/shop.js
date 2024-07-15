const {arrayObject} = require(`./products`)

function search(productName) {
    return arrayObject.find(product => {
        return product.name.toLowerCase() === productName.toLowerCase()
    })
}

console.log(search('bootstrap'))

