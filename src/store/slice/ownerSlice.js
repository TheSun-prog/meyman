import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$authApi} from "../../axios/axios";
import {fetchReviewData} from "./reviewSlice";





export const postHousing = createAsyncThunk('/owner/housing', async (data) => {
    const response = await $authApi.post('/housing/', data)
    return response.data;
});

const initialState = {
    hotelId: '',
    hotelData: {

    },
    roomData: [],
    userData: {

    }
};

const stateSlice = createSlice({
    name: "owner", initialState, reducers: {
        setOwnerState: (state, action) => {
            state.userData = action.payload
        },
        setHotelState: (state, action) => {
            state.hotelData = action.payload
        },
        setRoomState: (state, action) => {
            state.roomData = [...state?.roomData, action.payload]
        },
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
                    state.isLoading = false;
                    state.isError = action.error.message;
                });
        },
    },
});


export const {setOwnerState, setHotelState, setRoomState} = stateSlice.actions;

export default stateSlice.reducer;
