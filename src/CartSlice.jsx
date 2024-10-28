import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    showCart: false, // Controls cart visibility
    showPlants: true, //Controls plant visibility
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
    // This filters out the item by its name from the state.items array
    state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
    },
    toggleCartVisibility: (state) => {
        state.showCart = !state.showCart;
    },
  },
});

export const { addItem, removeItem, updateQuantity, toggleCartVisibility } = CartSlice.actions;

export default CartSlice.reducer;
