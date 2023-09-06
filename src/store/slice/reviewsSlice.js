import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { $authApi } from '../../axios/axios'

export const fetchReviewsData = createAsyncThunk('reviews/getReview', async () => {
  const response = await axios.get(`http://meyman.tw1.ru/reviews/`, {

  })
  return response.data
})

export const postReviewsData = createAsyncThunk('reviews', async (data) => {
  const token = localStorage.getItem('access'); // Получаем токен из Local Storage
  const headers = {
    'Authorization': `Bearer ${token}`, // Добавляем токен в заголовок запроса
    'Content-Type': 'application/json',
  };

  const response = await $authApi.post('http://127.0.0.1:8000/reviews/', data, { headers });

  console.log(response);
  return response.data;
});

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchReviewsData.pending, state => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(fetchReviewsData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchReviewsData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message
      })
  }
})

export default reviewsSlice.reducer
