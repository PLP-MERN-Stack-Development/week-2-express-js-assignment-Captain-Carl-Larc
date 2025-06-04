
const Product = require('../models/Product'); // Import the Product model

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        // Pass error to the centralized error handling middleware in server.js
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            // If product not found, send a 404 response directly
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        // Handle CastError for invalid ID format
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid product ID format' });
        }
        // Pass other errors to the centralized error handling middleware
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Public
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        // Handle Mongoose validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ message: 'Validation error', errors });
        }
        // Pass other errors to the centralized error handling middleware
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Update a product by ID
// @route   PUT /api/products/:id
// @access  Public
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        // Handle CastError for invalid ID format
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid product ID format' });
        }
        // Handle Mongoose validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ message: 'Validation error', errors });
        }
        // Pass other errors to the centralized error handling middleware
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Public
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        // Handle CastError for invalid ID format
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid product ID format' });
        }
        // Pass other errors to the centralized error handling middleware
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};