import { configureStore } from '@reduxjs/toolkit';
import hotelSlice from './hotelSlice';
import reservationsSlice from './reservationsSlice';
import availabilitySlice from "./availabilitySlice";
import reviewsSlice from './reviewsSlice';

const store = configureStore({
    reducer: {
        hotel: hotelSlice,
        reservation: reservationsSlice,
        availability: availabilitySlice,
        reviews: reviewsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store


