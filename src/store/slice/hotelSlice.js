import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchHousingData = createAsyncThunk('housing/fetchData', async ({limit, offset}) => {
  const response = await axios.get('http://meyman.tw1.ru/housing/', {

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

export const selectHotelData = (state) => state.hotel.data?.results;
export const selectHotelLoadingStatus = (state) => state.hotel.loading;
export const selectHotelError = (state) => state.hotel.error;
