import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const store = configureStore({
  reducer: {
    productReducer: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },

  preloadedState: {
    cart: cartItemsFromStorage,
  },

  middleware,
});

export default store;
