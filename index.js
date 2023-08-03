




const express = require('express');
const mongoose = require('mongoose');
const customersRouter = require('./Router/customers');
const AlbumsRouter = require('./Router/Albums');
const app = express();
const port = 3000;



// Middleware
app.use(express.json());
// MongoDB connection URL
const url = 'mongodb://localhost:27017/UBIT';
// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
// Routes
app.use('/', customersRouter);
app.use('/', AlbumsRouter);
