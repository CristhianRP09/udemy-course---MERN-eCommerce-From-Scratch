import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    productReducer: productListReducer,
    productDetails: productDetailsReducer,
  },
  preloadedState: {},
  middleware,
});

export default store;
