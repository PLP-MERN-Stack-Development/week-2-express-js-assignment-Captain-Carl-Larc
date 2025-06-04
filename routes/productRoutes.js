// routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/productController'); // Import the product controller

const router = express.Router(); // Create an Express router instance

// Define routes and link them to controller functions
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// Export the router
module.exports = router;