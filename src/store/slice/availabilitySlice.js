import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { $authApi } from '../../axios/axios'

export const postAvailabilityData = createAsyncThunk(
  'availability/post',
  async data => {
    const token = localStorage.getItem('access'); // Получаем токен из Local Storage
    const headers = {
      'Authorization': `Bearer ${token}`, // Добавляем токен в заголовок запроса
      'Content-Type': 'application/json',
    };
    const response = await $authApi.post('http://127.0.0.1:8000/availability/', data, { headers });
    console.log(response.data);
    return response.data
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
