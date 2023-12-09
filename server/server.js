import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';  // Import the cors middleware
import products from './data/products.js';

dotenv.config();
const port = process.env.PORT;
const app = express();

// Use the cors middleware to allow requests from all origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`server is running on ${port}`));
