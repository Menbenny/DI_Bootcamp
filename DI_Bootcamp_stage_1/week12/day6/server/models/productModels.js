const {db} = require('../config/dataBasePostGres.js')

const getAllProducts = () => {
    return db('products')
    .select("id", "name", "price")
    .orderBy("name")
};

const insertProduct = (name, price) => {
    return db("products").insert([name, price], ['id', 'name', price])
}

module.exports = {
    getAllProducts,
    insertProduct
};



























//!                  MODELS