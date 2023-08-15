import {configureStore} from "@reduxjs/toolkit"
import personalInfoSlice from "./slice/personalInfoSlice"
import emailSlice from "./slice/emailSlice"
import hotelCatologSlice from "./slice/hotelCatologSlice"


export const store = configureStore ({
  reducer: {
    personalInfo: personalInfoSlice,
    emailChange: emailSlice,
    hotelCatalog: hotelCatologSlice
  }
})