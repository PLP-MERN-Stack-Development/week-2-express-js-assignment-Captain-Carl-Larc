// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({  
    name: {
        type: String,
        required: [true, 'Product name is required'], // Name is a required string
        trim: true, // Remove whitespace from both ends
        minlength: [3, 'Product name must be at least 3 characters long'] // Example: minimum length validation
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters'] // Example: maximum length validation
    },
    price: {
        type: Number,
        required: [true, 'Price is required'], // Price is a required number
        min: [0, 'Price cannot be negative'] // Price must be non-negative
    },
    category: {
        type: String,
        required: [true, 'Category is required'], // Category is a required string
        trim: true,
        lowercase: true, // Store category in lowercase for consistency
        enum: ['electronics', 'books', 'clothing', 'home', 'sports', 'other'] // Example: Restrict to specific values
    },
    inStock: {
        type: Boolean,
        default: true // Default value is true if not provided
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets the creation date
    },
    updatedAt: {
        type: Date,
        default: Date.now // Automatically sets the update date
    }
});

// Middleware to update the 'updatedAt' field on save
productSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

// Create the Product model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;