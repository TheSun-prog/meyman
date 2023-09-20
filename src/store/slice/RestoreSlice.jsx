import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {$authApi, $mainApi} from '../../axios/axios'
import SweetAlert from 'sweetalert2'

// ЗАПРОС ДЛЯ ВОССТАНОВЛЕНИЕ ПАРОЛЯ [ 1 ] ОТПРАВКА ПОЧТЫ ДЛЯ ПОЛУЧЕНИЯ КОДА
export const asyncRestoreEmail = createAsyncThunk(
    'RestoreSlice/asyncRestoreEmail', async ({ email }) => {
        try {
            const form = new FormData
            form.append('email', email)
            const response = await $authApi.post(`/api/users/reset-password-email/`, form)
            console.log(response)
            if (response.status >= 200 && response.status <= 204) return response.data
        }
        catch (error) {
            console.log(error)
            await SweetAlert.fire({
                icon: `error`,
                title: `${error.response.status}`,
                text: `${error.response.data.detail}`,
            })
        }
    }
)

// ЗАПРОС ДЛЯ ВОССТАНОВЛЕНИЕ ПАРОЛЯ [ 2 ] ОТПРАВКА КОДА ДЛЯ ПОДТВЕРЖДЕНИЯ
export const asyncRestoreCode = createAsyncThunk(
    'RestoreSlice/asyncRestoreCode', async ({ code }) => {
        try {
            const form = new FormData
            form.append('code', code)
            const response = await $authApi.post(`/api/users/reset-password-code/`, form)
            console.log(response)
            if (response.status >= 200 && response.status <= 204) return response.data
        }
        catch (error) {
            console.log(error)
            await SweetAlert.fire({
                icon: `error`,
                title: `${error.response.status}`,
                text: `${error.response.data.error}`,
            })
        }
    }
)

// ЗАПРОС ДЛЯ ВОССТАНОВЛЕНИЕ ПАРОЛЯ [ 3 ] СОЗДАНИЕ НОВОГО ПАРОЛЯ
export const asyncRestoreNewPass = createAsyncThunk(
    'RestoreSlice/asyncRestoreNewPass', async ({ pass }) => {
        try {
            const code = localStorage.getItem('restore_code')
            const response = await $authApi.post(`/api/users/reset-new-password/${code}/`, {password: pass})
            console.log(response)
        }
        catch (error) {
            console.log(error)
            await SweetAlert.fire({
                icon: `error`,
                title: `${error.response.status}`,
                text: `${error.response.data.error}`,
            })
        }
    }
)

const RestoreSlice = createSlice({
    name: 'RestoreSlice',
    initialState: {
        status: '',
        status2: ''
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setStatus2: (state, action) => {
            state.status = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncRestoreEmail.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(asyncRestoreCode.fulfilled, (state, action) => {
                state.status2 = action.payload
            })
    }
})

export const {setStatus,setStatus2} = RestoreSlice.actions
export default RestoreSlice.reducer