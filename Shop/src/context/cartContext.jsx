import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialCartState } from '../reducer/cartReducer.jsx';

// Création du contexte
const CartContext = createContext();

// Fournisseur de contexte pour gérer l'état global du panier
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalisé pour accéder facilement au contexte
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
