import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $authApi } from '../../axios/axios';

export const reservationHotelPostData = createAsyncThunk('reviews', async (data) => {
  const token = localStorage.getItem('access'); // Получаем токен из Local Storage
  

  const response = await $authApi.post('api/housing/housing_reservations/', data);

  console.log(response);
  return response.data;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    isLoading: false,
    isError: false,
    data: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(reservationHotelPostData.pending, state => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(reservationHotelPostData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(reservationHotelPostData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message
      })
  }
})

export default reservationSlice.reducer
