import React from 'react';
import { CartProvider } from './context/cartContext.jsx';
import ProductList from './components/productList.jsx';
import Cart from './components/cart.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Simulateur de panier d'achat</h1>
        <ProductList />
        <h2>Mon Panier</h2>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
