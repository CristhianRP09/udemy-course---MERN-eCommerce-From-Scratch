import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
import colors from 'colors';

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('<h1 style="color: blue;">API is running...</h1>');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
