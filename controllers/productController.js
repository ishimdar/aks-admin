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
            imageUrl: result.secure_url,
            imagePublicId: result.public_id
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, unit } = req.body;

    // Find product first
    const product = await ProductSchema.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Handle image update if file is uploaded
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "products"
      });
      product.imageUrl = result.secure_url;
    }

    // Handle category/unit shortName → full name
    if (category) {
      const categoryObj = categories.find(c => c.shortName === category);
      if (!categoryObj) {
        return res.status(400).json({ error: "Invalid category short name" });
      }
      product.category = categoryObj.name;
    }

    if (unit) {
      const unitObj = units.find(u => u.shortName === unit);
      if (!unitObj) {
        return res.status(400).json({ error: "Invalid unit short name" });
      }
      product.unit = unitObj.name;
    }

    // Update other fields dynamically
    Object.keys(req.body).forEach(key => {
      if (key !== "category" && key !== "unit") {
        product[key] = req.body[key];
      }
    });

    await product.save();

    res.status(200).json({
      data: product,
      msg: "Product updated successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductSchema.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      data: product,
      msg: "Record found successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductSchema.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete image from Cloudinary if it exists
    if (product.imagePublicId) {
      await cloudinary.uploader.destroy(product.imagePublicId);
    }

    // Delete product from DB
    await ProductSchema.findByIdAndDelete(id);

    res.status(200).json({ msg: "Product and image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {createProduct, getProducts, updateProduct, getProductById, deleteProduct}