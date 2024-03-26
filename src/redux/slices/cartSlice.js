import { createSlice } from "@reduxjs/toolkit";
import { sumTotalPrice } from "../../utils/sumPrice";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],
  totalPrice: Number(JSON.parse(localStorage.getItem("totalPrice"))) || 0,
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addCartList: (state, action) => {
      const findItem = state.cartList.find((el) => el.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = sumTotalPrice(state.cartList);
    },

    removeCartList: (state, action) => {
      const findItem = state.cartList.find((el) => el.id === action.payload.id);
      if (findItem) {
        if (findItem.count > 0) {
          findItem.count--;
        }
      }
      state.totalPrice = sumTotalPrice(state.cartList);
    },

    clearCartList: (state, action) => {
      state.cartList = state.cartList.filter(
        (el) => el.id !== action.payload.id
      );
      state.totalPrice = sumTotalPrice(state.cartList);
    },
  },
});

export const { addCartList, removeCartList, clearCartList } = cartSlice.actions;
export default cartSlice.reducer;
