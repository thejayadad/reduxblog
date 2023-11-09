'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from "@/redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const calculateTotalPrice = () => {
    return cart.products.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  };

  return (
    <section className='px-4 py-8 max-screen-w-xl mx-auto'>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Total: ${calculateTotalPrice().toFixed(2)}
      </p>
      <button>Checkout</button>
    </section>
  );
};

export default Cart;

