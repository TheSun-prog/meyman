import { configureStore } from '@reduxjs/toolkit';
import hotelReducer, { fetchHousingData } from './slice/hotelSlice';
import reviewSlice from "./slice/reviewSlice";

const store = configureStore({
  reducer: {
    housing: hotelReducer,
    reviewSlice: reviewSlice
  },
});


export default store;
