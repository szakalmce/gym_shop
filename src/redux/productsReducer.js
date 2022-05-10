import { createSlice } from "@reduxjs/toolkit";
import { MdDone } from "react-icons/md";
import { products } from "../data/products";

const initialState = {
  allProducts: products,
  inCart: [],
  wishlist: [],
  openSideCart: false,
  cartModal: false,
  addToCartItem: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // CART ACTIONS

    addToCart: (state, action) => {
      const findIndex = state.inCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex >= 0) {
        state.inCart[findIndex].inCart += 1;
      } else {
        const newItem = { ...action.payload, inCart: 1 };
        state.inCart.push(newItem);
      }
    },
    removeCart: (state, action) => {
      const filteredCarts = state.inCart.filter(
        (product) => product.id !== action.payload
      );

      state.inCart = filteredCarts;
    },
    getAddToCartItem: (state, action) => {
      state.addToCartItem = action.payload;
    },

    // $ przemyśl nazewnictwo. Jeśli funkcja nie tylko otwiera modal, ale też zamyka
    // to nie powinno się nazywać "open" tylko np. "toggle" - bardziej intuicyjne
    openModalInCart: (state, action) => {
      // jeśli cartModal przechowuje stan zamknięcia/otwarcia modala to proponuje zmienić nazwe na bardziej opisową
      state.cartModal = action.payload;
    },

    // WISHLIST ACTIONS
    addToWishlist: (state, action) => {
      const findProduct = state.allProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      state.wishlist.push(action.payload);

      state.allProducts[findProduct].inWishlist = true;
    },
    removeWishlist: (state, action) => {
      const findProduct = state.allProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      state.wishlist.pop(action.payload);

      state.allProducts[findProduct].inWishlist = false;
    },
    addToWishlistSingleProduct: (state, action) => {
      const findIndex = state.inCart.findIndex(
        (item) => item.id === action.payload.state.id
      );

      if (findIndex >= 0) {
        state.inCart[findIndex].inCart += action.payload.inputValue;
      } else {
        const newItem = {
          ...action.payload.state,
          inCart: action.payload.inputValue,
        };
        state.inCart.push(newItem);
      }
    },
    // CART ACTIONS
     // przemyśl nazewnictwo. Jeśli funkcja nie tylko otwiera modal, ale też zamyka
    // to nie powinno się nazywać "open" tylko np. "toggle" - bardziej intuicyjne
    openSidebarCart: (state, action) => {
      state.openSideCart = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const {
  addToCart,
  addToWishlist,
  removeWishlist,
  addToWishlistSingleProduct,
  openSidebarCart,
  removeCart,
  getAddToCartItem,
  openModalInCart,
} = productsSlice.actions;
