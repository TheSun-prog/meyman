import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$authApi} from "../../axios/axios";
import {fetchReviewData} from "./reviewSlice";





export const postHousing = createAsyncThunk('/owner/housing', async (data) => {
    const response = await $authApi.post('/housing/', data)
    return response.data;
});

const initialState = {
    hotelId: localStorage.getItem('user_id'),
    hotelData: {

    },
    roomData: [],
    userData: {

    }
};

const stateSlice = createSlice({
    name: "owner", initialState, reducers: {
        setOwnerState: (state, action) => {
            state.owner.hotelId = localStorage.getItem('user_id')
            state.owner.userData = action.payload
        },
        setHotelState: (state, action) => {
            state.owner.hotelData = action.payload
        },
        setRoomState: (state, action) => {
            state.owner.roomData = [...state.owner.roomData, action.payload]
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
