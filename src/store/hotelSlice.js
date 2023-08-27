import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHotelData = createAsyncThunk('hotel/getData', async () => {
  const response = await axios.get(`http://127.0.0.1:8000/housing/`, {
    
  })
  console.log(response.data);
  return response.data
})

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    isLoading: false,
    isError: false,
    data: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHotelData.pending, state => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(fetchHotelData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchHotelData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message
      })
  }
})

export default hotelSlice.reducer
