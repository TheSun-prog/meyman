import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchRoomData = createAsyncThunk('room/getData', async (data) => {
  const response = await axios.get(`http://127.0.0.1:8000/rooms/${data}/`, {

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
