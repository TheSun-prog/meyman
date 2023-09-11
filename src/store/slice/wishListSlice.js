import {createSlice} from '@reduxjs/toolkit'
import {$authApi} from '../../axios/axios'

const user = localStorage.getItem('user_id')

export const getUserWishList = () => {
    return async (dispatch) => {
        try {
            const {data} = await $authApi.get(`api/favorite/wishlist/`, {params: {user}})
            dispatch(setWishLists(data))
        } catch (e) {
            dispatch(setError(e))
        }
    }
}
export const getOneWishList = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $authApi.get(`api/favorite/wishlist/${id}/`)
            dispatch(setOneWishList(data))
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

export const deleteWishList = (id) => {
    return async (dispatch) => {
        try {
            const data = await $authApi.delete(`api/favorite/wishlist/${id}/`)
            if (data.status === 204 ) {
                // alert("Успешно удалено")
                dispatch(getUserWishList())
            }
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

export const addWishList = (title) => {
    return async (dispatch) => {
        try {
            const data = await $authApi.post(`api/favorite/wishlist/`, {user, title})
            if (data.status === 201 ) {
                alert("Успешно создано и добавлено")
                dispatch(getUserWishList())
            }
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

const wishListSlice = createSlice({
    name: 'wishListSlice',
    initialState: {
        wishLists: [],
        oneWishList: {},
        housing: [],
        wishListModal: false,
        error: ''
    },
    reducers: {
        setWishLists: (state, action) => {
            state.wishLists = action.payload
        },
        setOneWishList: (state, action) => {
            state.oneWishList = action.payload
        },
        setHousing: (state, action) => {
            state.housing = action.payload
        },
        setWishListModal: (state, action) => {
            state.wishListModal = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }

    }
})

export const {
    setWishLists,
    setOneWishList,
    setWishListModal,
    setError,
    setHousing
} = wishListSlice.actions
export default wishListSlice.reducer