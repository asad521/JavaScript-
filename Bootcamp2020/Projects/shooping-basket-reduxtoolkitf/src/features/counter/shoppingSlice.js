import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchCount } from './counterAPI';

const initialState = [
  {
    id: '123',
    title: 'Blue t-shirt',
    description: 'No fancy sizing charts here, one t-shirt size to rule them all',
    imageUrl: '/blue-tshirt.png',
    price: 399,
    added:false,
  },
  {
    id: '456',
    title: 'Yellow t-shirt',
    description:
      'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
    imageUrl: '/yellow-tshirt.png',
    price: 499,
    added:false,

  },
  {
    id: '789',
    title: 'Red t-shirt',
    description: 'The only product on our site that might actually be worth buying',
    imageUrl: '/red-tshirt.png',
    price: 799,
    added:true,

  }
]
//App
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      return state.map(item=>{
        if(item.id !== action.payload.id){
          return item
        }
        return {
          ...item,
          added:true
        }
      })
      // add item to basket using `state` and `action` props
    },
    remove:(state, action) => {
      return state.map(item=>{
        if(item.id !==action.payload.id){
          return item
        }  
        return {
          ...item,
          added:false,
        }
      })
    }
  }
})
export const { add,remove } = basketSlice.actions
export default basketSlice.reducer;
export const selectBasket = (state) => state.reducer.basket; 

