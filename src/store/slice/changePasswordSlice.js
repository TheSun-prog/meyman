import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authApi } from "../../axios/axios";

export const postChangePassword = createAsyncThunk(
    'changePassword/post',
    async (data) => {
        try {
            const response = await $authApi.post('/api/users/change-password/', {
                old_password: data.currPass,
                new_password: data.newPass
            });
            return response;
        } catch (error) {
            throw error; // Прокидываем ошибку, чтобы Redux Toolkit мог обработать её через postChangePassword.rejected
        }
    }
);

const changePasswordSlice = createSlice({
    name: 'changePassword',
    initialState: {
        isLoading: false,
        isError: false,
        data: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(postChangePassword.pending, state => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(postChangePassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(postChangePassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.error.message
            })
    }
})

export default changePasswordSlice.reducer