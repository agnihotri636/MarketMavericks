// File: backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const authRoutes = require('./routes/auth');
const tradeRoutes = require('./routes/trades');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Set port
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/trades', tradeRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TradeTrek API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
