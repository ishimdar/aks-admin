const cloudinary = require('../config/cloudinary');
const ProductSchema = require("../models/Product");
const Product = require("../models/Product");
const { categories } = require("./categoryController");
const { units } = require("./unitController");

const createProduct = (async (req, res) => {
    
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products"
        });

        const { category, unit } = req.body;
        const categoryObj = categories.find(c => c.shortName === category);
        const unitObj = units.find(u => u.shortName === unit);

        if (!categoryObj || !unitObj) {
            return res.status(400).json({ error: "Invalid category or unit short name" });
        }

        const product = new ProductSchema({
            ...req.body,
            category: categoryObj.name,
            unit: unitObj.name,
            imageUrl: result.secure_url
        });

        await product.save();
        res.status(201).json({
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