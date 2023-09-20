import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {$mainApi} from "../../axios/axios";

const localStorageCurrency = localStorage.getItem('currency')

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchAdvertisingData = createAsyncThunk('advertising/fetchData/', async () => {
  const response = await $mainApi.get('api/advertising/advertising/');
  return response.data;
});

const advertisingSlice = createSlice({
  name: 'advertising',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertisingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdvertisingData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdvertisingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default advertisingSlice.reducer;

export const selectAdvertisingData = (state) => state.advertising.data;
export const selectAdvertisingDataCount = (state) => state.advertising.data?.count;
export const selectAdvertisingLoadingStatus = (state) => state.advertising.loading;
export const selectAdvertisingError = (state) => state.advertising.error;
