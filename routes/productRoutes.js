const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const { 
    createProduct, 
    getProducts, 
    updateProduct, 
    getProductById, 
    deleteProduct } = require('../controllers/productController');


router.post("/product", upload.single('image'), createProduct);
router.get("/product", getProducts);
router.put("/product/:id", upload.single("image"), updateProduct);
router.get("/product/:id", getProductById);
router.delete("/product/:id", deleteProduct);



module.exports = router;