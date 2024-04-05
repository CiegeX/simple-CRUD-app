const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct} = require("../controllers.js/product.controller");

router.get('/', getProducts);
router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);


module.exports = router;