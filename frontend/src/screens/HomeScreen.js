import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import asyncHandler from 'express-async-handler';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = asyncHandler(async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    });

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
