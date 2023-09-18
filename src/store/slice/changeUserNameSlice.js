import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authApi } from "../../axios/axios";

export const getChangeUserName = createAsyncThunk(
    'changeUserName/get',
    async () => {
        try {
            const response = await $authApi.get('/api/users/profile/1/', {
            });
            return response.data;
        } catch (error) {
            throw error; 
        }
    }
);
export const patchChangeUserName = createAsyncThunk(
    'changeUserName/patch',
    async (data) => {
        try {
            const response = await $authApi.patch('/api/users/profile/1/', {
                username: data,
            });
            return response.data;
        } catch (error) {
            throw error; 
        }
    }
);

const changeUserNameSlice = createSlice({
    name: 'changeUserName',
    initialState: {
        isLoading: false,
        isError: false,
        getData: [],
        patchData: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getChangeUserName.pending, state => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(getChangeUserName.fulfilled, (state, action) => {
                state.isLoading = false
                state.getData = action.payload
            })
            .addCase(getChangeUserName.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.error.message
            })

            .addCase(patchChangeUserName.pending, state => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(patchChangeUserName.fulfilled, (state, action) => {
                state.isLoading = false
                state.patchData = action.payload
            })
            .addCase(patchChangeUserName.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.error.message
            })
    }
})

export default changeUserNameSlice.reducer