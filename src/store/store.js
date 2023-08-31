import { configureStore } from '@reduxjs/toolkit';
import hotelReducer, { fetchHousingData } from './slice/hotelSlice';
import reviewSlice from "./slice/reviewSlice";
import AuthSlice from "./slice/AuthSlice";


const store = configureStore({
  reducer: {
    housing: hotelReducer,
    reviewSlice: reviewSlice,
    authSlice: AuthSlice
  },
});


export default store;
