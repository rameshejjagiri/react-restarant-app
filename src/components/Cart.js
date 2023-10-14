// src/components/Cart.js

import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  // Calculate total items and total price
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in cart: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}{' '}
            <button onClick={() => onIncreaseQuantity(item)}>+</button>
            <button onClick={() => onDecreaseQuantity(item)}>-</button>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
