const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const { createProduct, getProducts } = require('../controllers/productController');


router.post("/product", upload.single('image'), createProduct);
router.get("/product", getProducts);


module.exports = router;