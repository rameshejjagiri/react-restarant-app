// src/App.js

import React, { useState } from 'react';
import FilterBar from './components/FilterBar';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import Order from './components/Order';
import { categories, subcategories, items } from './models/Data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredItems([]);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    const itemsForSubcategory = items.filter((item) => item.subcategoryId === subcategory);
    setFilteredItems(itemsForSubcategory);
  };

  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Increase the quantity of the existing item in the cart
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      // Add the item to the cart with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleIncreaseQuantity = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
    } else {
      handleRemoveFromCart(item.id); // Remove the item if the quantity is 0
    }
  };

  const handlePlaceOrder = () => {
    // Perform order placement logic, e.g., sending data to a server
    setIsOrderPlaced(true);
  };

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      <FilterBar
        categories={categories}
        onCategoryChange={handleCategoryChange}
        subcategories={subcategories}
        onSubcategoryChange={handleSubcategoryChange}
      />
      <ItemList items={items} onAddToCart={handleAddToCart} />
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
      <Order cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
      {isOrderPlaced && <p>Order placed successfully!</p>}
    </div>
  );
}

export default App;
