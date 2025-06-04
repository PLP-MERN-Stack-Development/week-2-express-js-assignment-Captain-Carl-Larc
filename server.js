// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes setup
app.use('/api/products', productRoutes);

//error handling middleware
app.use((err, req, res) => {
    console.error(err.stack); // Log the full error stack for debugging

    // Default to 500 Internal Server Error
    const statusCode = 500;
    const message = 'Server Error';

    // Send a generic 500 response for unhandled errors
    res.status(statusCode).json({
        message: message,
        error: err.message // Include the error message for more context
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);    
    console.log(`Product API: http://localhost:${PORT}/api/products`);
});