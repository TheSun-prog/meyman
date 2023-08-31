import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $authApi, $mainApi } from '../../axios/axios'
import decode from 'jwt-decode'


export const asyncSignUp = createAsyncThunk(
    'AuthSlice/asyncSignUp', async ({ userData }) => {
        try {
            const response = await $mainApi.post(`/api/users/signup/`, userData)
            console.log(response)

            if (response?.status === 200 && response?.status === 201) {
                console.log(response?.statusText)
                return await response?.statusText
            }
        }
        catch (error){
            console.error(error)
            alert(error.response.data.email)
        }
    }
)


export const asyncConfirmCode = createAsyncThunk(
    'AuthSlice/asyncConfirmCode', async ({ code, user }) => {
        try {
            const form = new FormData
            form.append('email', user.email)
            form.append('password', user.password)

            const response = await $mainApi.post(`/api/users/login/`, form)
            console.log(response)

            localStorage.setItem('access', response.data.tokens.access)
            localStorage.setItem('refresh', response.data.tokens.refresh)
            const userID = decode(response.data.tokens.access)
            localStorage.setItem('user_id', userID.user_id)

            const form2 = new FormData
            form2.append('email', user.email)
            form2.append('verify_code', code)

            const response2 = await $authApi.post(`/api/users/verify/`, form2)
            console.log(response2)
        }
        catch (error){
            console.error(error)
            alert(error.response.data.error)
        }
    }
)


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        status: '',
        error: ''
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncSignUp.fulfilled, (state, action) => {
                console.log(action.payload)
                state.status = action.payload
            })
            .addCase(asyncSignUp.rejected, (state, action) => {
                console.log(action.payload)
                state.status = action.payload
            })
    }
})

export const { setStatus } = AuthSlice.actions
export default AuthSlice.reducer