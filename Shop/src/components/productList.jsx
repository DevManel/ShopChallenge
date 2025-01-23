import React from 'react';
import { useCartContext } from '../context/cartContext.jsx';

const products = [
  { id: 1, name: 'Montre de luxe', price: 120, image: 'https://picsum.photos/200?random=1' },
  { id: 2, name: 'Sac à dos', price: 80, image: 'https://picsum.photos/200?random=2' },
  { id: 3, name: 'Casque audio', price: 150, image: 'https://picsum.photos/200?random=3' },
  { id: 4, name: 'Smartphone', price: 600, image: 'https://picsum.photos/200?random=4' },
  { id: 5, name: 'Chaussures de sport', price: 90, image: 'https://picsum.photos/200?random=5' },
];

const ProductList = () => {
  const { dispatch } = useCartContext();

  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity: 1 }
    });
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
          <button onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
