const express = require('express');
const router = express.Router();

const { createProduct, getProducts } = require('../controllers/productController');


router.post("/product", createProduct);
router.get("/product", getProducts);


module.exports = router;