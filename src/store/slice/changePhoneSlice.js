import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authApi } from "../../axios/axios";


export const patchChangePhone = createAsyncThunk(
    'changePhone/patch',
    async (data) => {
        try {
            const response = await $authApi.patch('/api/users/profile/1/', {
                phone_number: data,
            });
            return response.data;
        } catch (error) {
            throw error; 
        }
    }
);

const changePhoneSlice = createSlice({
    name: 'changePhoneSlice',
    initialState: {
        isLoading: false,
        isError: false,
        getData: [],
        patchData: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(patchChangePhone.pending, state => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(patchChangePhone.fulfilled, (state, action) => {
                state.isLoading = false
                state.patchData = action.payload
            })
            .addCase(patchChangePhone.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.error.message
            })
    }
})

export default changePhoneSlice.reducer