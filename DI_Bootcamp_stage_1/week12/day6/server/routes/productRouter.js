const express = require('express');
const { _getAllProducts, _insertProduct} = require('../controllers/productsController.js')
const router = express.Router()

router.get("/", _getAllProducts);
router.post("/", _insertProduct)

// without curly braces because it's one router
module.exports = router





























//!                  ROUTES