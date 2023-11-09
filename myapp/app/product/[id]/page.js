'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addProduct } from '@/redux/cartSlice';

const ProductDetail = (ctx) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);  const id = ctx.params.id
  const [price, setPrice] = useState();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/product/${id}`); 
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({...product, price, quantity}));
  };

  return (
    <section className='px-4 py-8 max-w-screen-xl mx-auto'>
            <div>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.desc}</p>
          <button onClick={handleClick}>Add To Cart</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
    </section>
  );
};

export default ProductDetail;
