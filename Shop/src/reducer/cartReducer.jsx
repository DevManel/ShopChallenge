export const initialCartState = {
    items: [],
    total: 0,
    discount: 0
  };
  
  export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newItem = action.payload;
        const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
        if (existingItemIndex > -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += newItem.quantity;
          return { ...state, items: updatedItems };
        } else {
          return { ...state, items: [...state.items, newItem] };
        }
      case 'REMOVE_ITEM':
        return { ...state, items: state.items.filter(item => item.id !== action.payload) };
      case 'UPDATE_QUANTITY':
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
        return { ...state, items: updatedItems };
      case 'CALCULATE_TOTAL':
        let total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        let discount = 0;
        if (total > 100) {
          discount = total * 0.1;
          total -= discount;
        }
        return { ...state, total, discount };
      default:
        return state;
    }
  };
  