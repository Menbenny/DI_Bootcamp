const {getAllProducts} = require('../models/productModels.js')
const {db} = require('../config/dataBasePostGres.js')

const _getAllProducts = async (req, res) => {
    try {
        const result = await getAllProducts()
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).send(`Product not found`)
    }
}

const _insertProduct = (name, price) => {

    const { name, price } = req.body;

    db('products')
    .insert({name, price})
    .returning(["name", "price"])
}

module.exports = {
    _getAllProducts,
    _insertProduct
}















//!                 CONTROLLERS