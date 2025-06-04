// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const connectDB = require('./config/db'); 


// Sample in-memory products database
// let products = [
//   {
//     id: '1',
//     name: 'Laptop',
//     description: 'High-performance laptop with 16GB RAM',
//     price: 1200,
//     category: 'electronics',
//     inStock: true
//   },
//   {
//     id: '2',
//     name: 'Smartphone',
//     description: 'Latest model with 128GB storage',
//     price: 800,
//     category: 'electronics',
//     inStock: true
//   },
//   {
//     id: '3',
//     name: 'Coffee Maker',
//     description: 'Programmable coffee maker with timer',
//     price: 50,
//     category: 'kitchen',
//     inStock: false
//   }
// ];

//connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
const PORT = process.env.PORT

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 