import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems');
const cartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },

  preloadedState: {
    // cart: cartItems,
  },

  middleware,
});

export default store;
