// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive']
  },
  category: {
    type: String,
    index: true,
    trim: true
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'Stock cannot be negative']
  },
  quantity: {
    type: Number,
    default: 1,
    min: [1, 'Quantity must be at least 1']
  },
  unit: {
    type: String,
    required: true,
    trim: true
    // Example values: "kg", "g", "litre", "ml", "pack", "dozen"
  },
  imageUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
      },
      message: props => `${props.value} is not a valid image URL`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Text index for search on name and description
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
