import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { reservationHotelPostData } from './reservationsSlice'

export const postAvailabilityData = createAsyncThunk(
  'availability/post',
  async data => {
    const response = await axios.post(`http://127.0.0.1:8000/availability/`, {
      housing: 1,
      date: data.arrival
    })
    return response
  }
)

const availabilitySlice = createSlice({
  name: 'availability',
  initialState: {
    isLoading: false,
    isError: null,
    data: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postAvailabilityData.pending, state => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(postAvailabilityData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(postAvailabilityData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message
      })
  }
})

export default availabilitySlice.reducer
