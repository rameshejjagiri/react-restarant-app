import React from 'react';

const ItemList = ({ items, onAddToCart }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>{item.name}</div>
          <div>${item.price}</div>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
