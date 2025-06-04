const mongoose = require('mongoose');
const dotenv = require('dotenv');

//configuring environment variables
dotenv.config();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};
// Export the connectDB function
module.exports = connectDB;