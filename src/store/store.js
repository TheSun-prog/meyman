import { configureStore } from '@reduxjs/toolkit';

import hotelSlice, { fetchHousingData } from './slice/hotelSlice';
import reservationsSlice from './slice/reservationsSlice';
import availabilitySlice from "./slice/availabilitySlice";



const store = configureStore({
    reducer: {
        hotel: hotelSlice,
        reservation: reservationsSlice,
        availability: availabilitySlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store

