import React, { useState, useEffect } from 'react';

const FilterBar = ({ categories, onCategoryChange, subcategories, onSubcategoryChange }) => {
  return (
    <div>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {subcategories.length > 0 && (
        <select onChange={(e) => onSubcategoryChange(e.target.value)}>
          <option value="">Select Subcategory</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FilterBar;
