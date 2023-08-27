import { configureStore } from '@reduxjs/toolkit';
import hotelSlice from './hotelSlice';
import reservationsSlice from './reservationsSlice';
import availabilitySlice from "./availabilitySlice";

const store = configureStore({
    reducer: {
        hotel: hotelSlice,
        reservation: reservationsSlice,
        availability: availabilitySlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store


