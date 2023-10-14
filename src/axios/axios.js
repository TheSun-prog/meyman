import axios from 'axios'

const NOT_VALID = 'token_not_valid'
const NOT_PROVIDED = 'Authentication credentials were not provided.'

const createApi = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
}

const $mainApi = createApi()
const $authApi = createApi()

const getToken = () => {
    return localStorage.getItem('access') || sessionStorage.getItem('tokenSession')
}

const setToken = (token) => {
    localStorage.setItem('access', token)
    sessionStorage.setItem('tokenSession', token)
}

const removeTokens = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    sessionStorage.removeItem('tokenSession')
    sessionStorage.removeItem('refresh')
}

const authInterceptor = config => {
    const access = getToken()
    if (access) config.headers.authorization = `Bearer ${access}`
    return config
}

const refreshToken = async () => {
    const config = {
        refresh: localStorage.getItem('refresh') || sessionStorage.getItem('refresh'),
    }
    try {
        const response = await $mainApi.post(`/api/users/tokens/refresh_access_token/`, config)
        console.log('Access token was refreshed', response)

        if (response.status === 200) await selectToken(response)
        else handleTokenRefreshError()
    }
    catch (refreshError) {
        if (refreshError?.response?.status === 401) {
            handleTokenRefreshError()
        }
        throw refreshError
    }
}

const handleTokenRefreshError = () => {
    removeTokens()
    window.location.href = '/auth'
    window.location.reload()
}

const selectToken = async (response) => {
    const token = getToken()
    token ? setToken(response.data?.access) : sessionStorage.setItem('tokenSession', response.data?.access)
}

$authApi.interceptors.request.use(authInterceptor)

$authApi.interceptors.response.use((config) => config, async (error) => {
        const originalRequest = error.config

        if (error?.response?.data?.code === NOT_VALID && !error.config._isRetry) {
            originalRequest._isRetry = true
            await refreshToken()
            return $authApi.request(originalRequest)
        }
        else if (error?.response?.data?.detail === NOT_PROVIDED && !error.config._isRetry) {
            originalRequest._isRetry = true
            removeTokens()
        }
        alert("Вы еще не зарегистрированы. Вам следует войти в аккаунт")
    }
)

export { $mainApi, $authApi }