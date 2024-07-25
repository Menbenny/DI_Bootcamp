const { products } = require('../config/data.js')

const getAllProducts = (req, res) =>{
    res.json(products)
}

const getOneProduct = (req, res) => {
      const { id } = req.params;
      const myprod = products.find((item) => item.id == id);
    
      if (!myprod) return res.status(404).json({ msg: "product not found" });
    
      res.json(myprod);
};

const deleteProduct = (req, res) => {
      console.log(req.params);
      const { id } = req.params;
    
      const myprod = products.find((item) => item.id == id);
    
      if (!myprod) return res.status(404).json({ msg: "product not found" });
    
      res.json(myprod);
    };

const putProduct = (req, res)=> {
      const id = Number(req.query.id);
      const index = products.findIndex((item) => item.id == id);
      const updatedProduct = {
        ...req.body, 
        name: req.body.name,
        price: req.body.price
      }
    
      products.push(updatedProduct)
      res.json(products)
    };

const nameSearchProduct = (req, res) => {
      console.log(req.params);
      const { id } = req.params;
    
      const myprod = products.find((item) => item.id == id);
    
      if (!myprod) return res.status(404).json({ msg: "product not found" });
    
      res.json(myprod);
    };

const postProduct = (req, res)=> {
      const id = Number(req.query.id);
      const index = products.findIndex((item) => item.id == id);
      const updatedProduct = {
        ...req.body, 
        name: req.body.name,
        price: req.body.price
      }
    
      products.push(updatedProduct)
      res.json(products)
    };

module.exports = {
    getAllProducts,
    getOneProduct,
    deleteProduct,
    putProduct,
    nameSearchProduct,
    postProduct
}