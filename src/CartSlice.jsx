import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    // Add the new item to the items array
    state.items.push(action.payload);
    },
    removeItem: (state, action) => {
    // Remove item logic
    state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
    //Update item quantity logic
    const item = state.items.find(item => item.id === action.payload.id);
        if (item) {
            item.quantity = action.payload.quantity; // Update the quantity of the item
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
