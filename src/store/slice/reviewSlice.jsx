import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { $authApi, $mainApi } from '../../axios/axios';

export const fetchReviewData = createAsyncThunk('review/getReview', async ({ limit, offset }) => {
  const response = await $mainApi.get('/review/', {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
});

export const postReviewData = createAsyncThunk('review/postReview', async (data) => {
  const response = await $authApi.post('/review/', data)
  return response.data;
});

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchReviewData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchReviewData.rejected, (state, action) => {
        console.log(state)
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default reviewSlice.reducer;

export const selectReviewData = (state) => state.review.data?.results;
export const selectReviewLoadingStatus = (state) => state.review.loading;
export const selectReviewError = (state) => state.review.error;
