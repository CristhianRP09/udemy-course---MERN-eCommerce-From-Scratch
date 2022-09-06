const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>API is running...</h1>');
});

app.get('/', (req, res) => {
  res.send('<h1>API is running...</h1>');
});

app.get('/api/products', (req, res) => {
  res.json(products);
   
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
  });
  

app.listen(3000, console.log('Running on port 3000'));
