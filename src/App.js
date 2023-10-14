import React, { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import ItemList from './components/ItemList';
import { categories, subcategories, items } from './models/data.js'; // Import the dummy data

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Filter subcategories based on the selected category
    const subcategoriesForCategory = subcategories.filter((subcat) => subcat.categoryId === category);
    setFilteredItems([]); // Clear filtered items
    setSelectedSubcategory(''); // Clear selected subcategory
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    // Filter items based on the selected subcategory
    const itemsForSubcategory = items.filter((item) => item.subcategoryId === subcategory);
    setFilteredItems(itemsForSubcategory);
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
      <ItemList items={items} />
    </div>
  );
}

export default App;
