import { combineReducers } from '@reduxjs/toolkit'
import basketReducer from '../features/counter/shoppingSlice';
import counterReducer from '../features/counter/counterSlice';
export default combineReducers({
  basket: basketReducer,
  counter: counterReducer,
})
