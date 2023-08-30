import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const reservationHotelPostData = createAsyncThunk('reservation/postData', async (data) => {
  const response = await axios.get(`http://127.0.0.1:8000/housing_reservations/`, {
    user: 1,
    housing: 'test',
    destination: 'Бишкек',
    check_in_date: data.arrival,
    check_out_date: data.departure,
    adults: data.persons.adult,
    children: data.persons.children
  })
  console.log(response.data)
  return response.data
})

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
