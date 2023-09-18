import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $mainApi } from '../../axios/axios'

const localStorageCurrency = localStorage.getItem('currency')

export const fetchHotelData = createAsyncThunk('hotel/getData', async (data) => {
  const response = await $mainApi.get(`api/housing/housing/${data.hotelId || data}/`, {
    params: {
      currency: data.currency || localStorageCurrency
    }
  })
  return response.data
})

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
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
