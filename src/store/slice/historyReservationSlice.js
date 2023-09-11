import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $mainApi } from "../../axios/axios";

export const fetchHistoryReservationData = createAsyncThunk('history_reservation/getData', async () => {
  const response = await $mainApi.get(`/housing_reservations/`, {})
  return response.data
})

const historyReservation = createSlice({
  name: 'history_reservation',
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHistoryReservationData.pending, state => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(fetchHistoryReservationData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchHistoryReservationData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message
      })
  }
})

export default historyReservation.reducer