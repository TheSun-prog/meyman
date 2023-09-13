import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {$mainApi} from "../../axios/axios";

const localStorageCurrency = localStorage.getItem('currency')

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchHousingData = createAsyncThunk('housing/fetchData/', async ({limit, offset, currency}) => {
  const response = await $mainApi.get('/housing/', {
    headers: {
    },
    params: {
      limit,
      offset,
      currency: currency || localStorageCurrency
    }
  });
  return response.data;
});

const housingSlice = createSlice({
  name: 'housing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHousingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHousingData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHousingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default housingSlice.reducer;

export const selectHousingData = (state) => state.housing.data?.results;
export const selectHousingLoadingStatus = (state) => state.housing.loading;
export const selectHousingError = (state) => state.housing.error;
