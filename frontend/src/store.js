import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    productReducer: productListReducer,
  },
  preloadedState: {},
  middleware,
});

export default store;
