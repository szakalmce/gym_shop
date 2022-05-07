import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsReducer";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
