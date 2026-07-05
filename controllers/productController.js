const ProductSchema = require("../models/Product");

const createProduct = (async (req, res) => {
    
    try {
        const product = new ProductSchema(req.body);
        await product.save();
        res.status(200).json({
            data: product,
            msg: "Record Created Succesfully"
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }

});

const getProducts = (async (req, res) => {
    try {
        const products = await ProductSchema.find();
        res.status(200).json({
            data: products,
            msg: 'Record found succesfully'
        })
    } catch(err) {
        res.status(500).json({
            error: err.message
        });
    }
})

module.exports = {createProduct, getProducts}