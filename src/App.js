// src/App.js

import React, { useState } from 'react';
import FilterBar from './components/FilterBar';
import ItemList from './components/ItemList';
import Cart from './components/Cart.js'; // Update to all lowercase 'cart'
import { categories, subcategories, items } from './models/Data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Store cart items

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredItems([]); // Clear filtered items
    setSelectedSubcategory(''); // Clear selected subcategory
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    // Filter items based on the selected subcategory
    const itemsForSubcategory = items.filter((item) => item.subcategoryId === subcategory);
    setFilteredItems(itemsForSubcategory);
  };

  const handleAddToCart = (item) => {
    // Add item to the cart
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    // Remove item from the cart
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;
