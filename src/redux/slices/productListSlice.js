import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = productListSlice.actions;
export default productListSlice.reducer;
