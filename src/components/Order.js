// src/components/Order.js

import React from 'react';

const Order = ({ cartItems, onPlaceOrder }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}0...
            
          </li>
        ))}
      </ul>
      <button onClick={onPlaceOrder}>Place Order</button>
    </div>
  );
};

export default Order;
