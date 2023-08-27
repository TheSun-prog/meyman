import { configureStore } from '@reduxjs/toolkit';
import hotelReducer, { fetchHousingData } from './slice/hotelSlice';

const store = configureStore({
  reducer: {
    housing: hotelReducer,
  },
});


export default store;
