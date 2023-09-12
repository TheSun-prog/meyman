import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$authApi} from "../../axios/axios";
import {fetchReviewData} from "./reviewSlice";


export const postOwnerprofile = createAsyncThunk('/owner/profile', async (data) => {
    const response = await $authApi.post('/ownerprofile/', data)
    return response.data;
});

export const postHousing = createAsyncThunk('/owner/housing', async (data) => {
    const response = await $authApi.post('/housing/', data)
    return response.data;
});

const initialState = {
    ownerInfo: {
        phone_number: ''
    }, value: {
        user_id: localStorage.getItem('user_id'),
        stars: 0,
        address: '',
        check_in_time_start: '',
        check_in_time_end: '',
        check_out_time_start: '',
        check_out_time_end: '',
        free_internet: false,
        restaurant: false,
        airport_transfer: false,
        paid_transfer: false,
        park: false,
        paid_parking: false,
        spa_services: false,
        bar: false,
        paid_bar: false,
        gym: false,
        children_playground: false,
        pool: false,
        car_rental: false,
        room_service: false,
        poolside_bar: false,
        cafe: false,
        in_room_internet: false,
        hotel_wide_internet: false,
        children_allowed: false,
        pets_allowed: false,
        pet_fee: false,
        breakfast_offered: false,
        breakfast_included: false,
        breakfast_cost_usd: '',
        breakfast_type: "",
        parking_location: "",

    },
};

const stateSlice = createSlice({
    name: "owner", initialState, reducers: {
        setOwnerState: (state, action) => {
            const userId = localStorage.getItem('user_id')
            state.value = {...state.value, user_id: userId}
            state.value = action.payload;
        }, extraReducers: (builder) => {
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
    },
});


export const {setOwnerState} = stateSlice.actions;
export default stateSlice.reducer;
