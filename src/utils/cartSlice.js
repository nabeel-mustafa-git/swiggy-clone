import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating  the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const newArray = state.items.filter((item) => item.card.info.id !== action.payload.card.info.id);
      state.items = newArray;
      console.log(current(state));
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
