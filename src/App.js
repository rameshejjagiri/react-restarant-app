import React, { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar'; // Update this import
import ItemList from './components/ItemList'; // Update this import

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [items, setItems] = useState([]);

  // Fetch categories, subcategories, and items from your API here.

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Fetch subcategories for the selected category.
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    // Fetch items for the selected subcategory.
  };

  const handleAddToCart = (item) => {
    // Implement cart functionality here.
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
    </div>
  );
}

export default App;
