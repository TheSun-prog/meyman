import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {$authApi, $mainApi} from "../../axios/axios";

export const fetchReviewsData = createAsyncThunk('reviews/', async () => {
  const response = await $mainApi.get(`api/housing/reviews/`, {
  })
  return response.data
})

export const postReviewsData = createAsyncThunk('/reviews/', async (data) => {
  const response = await $authApi.post('api/housing/reviews/', data);
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

export const selectReviewsData = (state) => state.reviews.data?.results;
export const selectReviewsLoadingStatus = (state) => state.reviews.loading;
export const selectReviewsError = (state) => state.reviews.error;
