import React, { useEffect } from 'react';
import { useCartContext } from '../context/cartContext.jsx';

const Cart = () => {
  const { state, dispatch } = useCartContext();

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTAL' });
  }, [state.items, dispatch]);

  return (
    <div className="cart">
      {state.items.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <div>
          <ul>
            {state.items.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price} €</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)}
                />
                <p>Total produit: {item.price * item.quantity} €</p>
                <button onClick={() => handleRemoveItem(item.id)}>Supprimer</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: {state.total} €</p>
            <p>Réduction: {state.discount} €</p>
            <p>Total après réduction: {state.total - state.discount} €</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
