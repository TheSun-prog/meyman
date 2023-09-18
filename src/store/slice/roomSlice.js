import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $mainApi } from '../../axios/axios'

const localStorageCurrency = localStorage.getItem('currency')

export const fetchRoomData = createAsyncThunk('room/getData', async (data) => {
  const response = await $mainApi.get(`api/housing/rooms/${data.roomId || data}/`, {
    params: {
      currency: data.currency || localStorageCurrency
    }
  })
  return response.data
})

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRoomData.pending, state => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(fetchRoomData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchRoomData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message
      })
  }
})

export default roomSlice.reducer
