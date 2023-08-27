import { configureStore } from '@reduxjs/toolkit';
import hotelSlice from './hotelSlice';
import reservationsSlice from './reservationsSlice';

const store = configureStore({
    reducer: {
        hotel: hotelSlice,
        reservation: reservationsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store


