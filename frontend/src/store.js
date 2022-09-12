import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { producListtReducer } from './reducers/productReducers';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    productReducer: producListtReducer,
  },
  preloadedState: {},
  middleware,
});

export default store;
