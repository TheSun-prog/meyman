import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $authApi, $mainApi } from '../../axios/axios'
import decode from 'jwt-decode'

// ЗАПРОС ДЛЯ РЕГИСАТРЦИИ ( СОЗДАНИЕ АККАУНТА )
export const asyncSignUp = createAsyncThunk(
    'AuthSlice/asyncSignUp', async ({ userData }) => {
        try {
            const response = await $mainApi.post(`/api/users/signup/`, userData)
            console.log(response)
            if (response.status >= 200 && response.status <= 204) return response.data
        }
        catch (error){
            console.error(error)
            alert("Пользователь с таким email уже существует!")
        }
    }
)

// ЗАПРОС ДЛЯ ПОДТВЕРЖДЕНИЯ КОДА && ЗАПРОС НА ВХОД В АККАУНТ
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

            if (response.status >= 200 && response.status <=204 && response2.status >= 200 && response2.status <=204) {
                return response.data
            }
        }
        catch (error){
            console.error(error)
            console.log(error)
            alert(error.response.data.error)
        }
    }
)


export const asyncLogin = createAsyncThunk(
    'AuthSlice/asyncLogin', async ({user},{dispatch}) => {
        try {
            const response = await $mainApi.post(`/api/users/login/`, user)
            console.log(response)
            localStorage.setItem('access', response.data.tokens.access)
            localStorage.setItem('refresh', response.data.tokens.refresh)
            const userID = decode(response.data.tokens.access)
            localStorage.setItem('user_id', userID.user_id)
            if (response.status >= 200 && response.status <= 204) return response.data
        }
        catch (error) {
            console.log(error)
            dispatch(setError3(true))
        }
    }
)


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        status: '',
        error: '',
        status2: '',
        error2: '',
        status3: '',
        error3: false,
        AuthModal: false,
        regErrorModal: false,
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setAuthModal: (state) => {
            state.AuthModal = !state.AuthModal
        },
        setRegError: (state) => {
            state.regErrorModal = !state.regErrorModal
        },
        setStatus3: (state, action) => {
            state.status3 = action.payload
        },
        setError3: (state, action) => {
            state.error3 = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // SIGN UP
            .addCase(asyncSignUp.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(asyncSignUp.rejected, (state, action) => {
                state.error = action.payload
            })
            // CONFIRM CODE
            .addCase(asyncConfirmCode.fulfilled, (state, action) => {
                state.status2 = action.payload
                setTimeout(() => window.location.reload(), 500)
            })
            .addCase(asyncConfirmCode.rejected, (state, action) => {
                state.error2 = action.payload
            })
            .addCase(asyncLogin.fulfilled, (state, action) => {
                state.status3 = action.payload
            })
    }
})

export const { setStatus, setError, setAuthModal, setRegError, setError3, setStatus3 } = AuthSlice.actions
export default AuthSlice.reducer