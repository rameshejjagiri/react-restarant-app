// src/dummyData.js

// Sample categories
export const categories = [
    { id: 1, name: 'Appetizers' },
    { id: 2, name: 'Main Courses' },
    { id: 3, name: 'Desserts' },
  ];
  
  // Sample subcategories
  export const subcategories = [
    { id: 1, name: 'Starters', categoryId: 1 },
    { id: 2, name: 'Mains', categoryId: 2 },
    { id: 3, name: 'Sweets', categoryId: 3 },
  ];
  
  // Sample items
  export const items = [
    { id: 1, name: 'Garlic Bread', price: 5.99, image: 'garlic_bread.jpg', subcategoryId: 1 },
    { id: 2, name: 'Margherita Pizza', price: 12.99, image: 'margherita_pizza.jpg', subcategoryId: 2 },
    { id: 3, name: 'Chocolate Cake', price: 6.99, image: 'chocolate_cake.jpg', subcategoryId: 3 },
    // Add more items as needed
  ];
  