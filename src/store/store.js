import {configureStore} from '@reduxjs/toolkit';


import housingReducer, {fetchHousingData} from './slice/housingSlice';
import reviewSlice from "./slice/reviewSlice";
import AuthSlice from "./slice/AuthSlice";
import hotelSlice from './slice/hotelSlice';
import reservationsSlice from './slice/reservationsSlice';
// import availabilitySlice from "./slice/availabilitySlice";
import reviewsSlice from './slice/reviewsSlice';

const store = configureStore({
    reducer: {
        hotel: hotelSlice, reservation: reservationsSlice, // availability: availabilitySlice,
        reviews: reviewsSlice, housing: housingReducer, authSlice: AuthSlice, review: reviewSlice,
    }, middleware: getDefaultMiddleware => getDefaultMiddleware()
})


export default store;
