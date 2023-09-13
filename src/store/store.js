import { configureStore } from '@reduxjs/toolkit'

import housingReducer, { fetchHousingData } from './slice/housingSlice'
import reviewSlice from './slice/reviewSlice'
import AuthSlice from './slice/AuthSlice'
import hotelSlice from './slice/hotelSlice'
import reservationsSlice from './slice/reservationsSlice'
// import availabilitySlice from "./slice/availabilitySlice";
import reviewsSlice from './slice/reviewsSlice'
import roomSlice from './slice/roomSlice'
import changePasswordSlice from './slice/changePasswordSlice'
import changeUserNameSlice from './slice/changeUserNameSlice'
import changePhoneSlice from './slice/changePhoneSlice'
import historyReservationSlice from './slice/historyReservationSlice'
import ownerSlice from "./slice/ownerSlice";
import RestoreSlice from "./slice/RestoreSlice";
import currencySlice from './slice/currencySlice'
import wishListSlice from "./slice/wishListSlice";

const store = configureStore({
  reducer: {
    hotel: hotelSlice,
    reservation: reservationsSlice, // availability: availabilitySlice,
    reviews: reviewsSlice,
    housing: housingReducer,
    authSlice: AuthSlice,
    review: reviewSlice,
    room: roomSlice,
    changePassword: changePasswordSlice,
    changeUserName: changeUserNameSlice,
    changePhone: changePhoneSlice,
    historyReservation: historyReservationSlice,
    owner: ownerSlice,
    restore: RestoreSlice,
    currency: currencySlice,
      wishList: wishListSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})


export default store;
