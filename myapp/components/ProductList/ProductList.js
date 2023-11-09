'use client'
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/api/product'); // Make an API request to get all products
          setProducts(response.data); // Update the state with the products data
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

  return (
    <section>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
