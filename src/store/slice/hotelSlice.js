import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchHousingData = createAsyncThunk('housing/fetchData', async ({limit, offset}) => {
  const response = await axios.get('http://127.0.0.1:8000/housing/', {
    params: {
      limit,
      offset,
    }
  });
  return response.data;
});

const hotelSlice = createSlice({
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

export default hotelSlice.reducer;

export const selectHotelData = (state) => state.housing.data?.results;
export const selectHotelLoadingStatus = (state) => state.housing.loading;
export const selectHotelError = (state) => state.housing.error;
