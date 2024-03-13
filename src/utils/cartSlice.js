import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating  the state
      const newItem = action.payload;

      if (state.items.length === 0) {
        newItem.card.info.quantity = 1;
        state.items.push(newItem);
      } else {
        const index = state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id);

        if (index === -1) {
          newItem.card.info.quantity = 1;
          state.items.push(newItem);
          // console.log(state.items);
        } else {
          const quat = state.items[index].card.info.quantity;
          state.items[index].card.info.quantity = quat + 1;
        }
      }
    },
    removeItem: (state, action) => {
      if (action.payload.card.info.quantity === 1) {
        const newArray = state.items.filter((item) => item.card.info.id !== action.payload.card.info.id);
        state.items = newArray;
      } else {
        const index = state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id);
        state.items[index].card.info.quantity -= 1;
      }
    },
    clearCart: (state) => {
      // console.log(current(state));
      // console.log(state);
      // state.items = [];
      // state.items.length = 0;
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
