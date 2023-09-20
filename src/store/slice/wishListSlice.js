import {createSlice} from '@reduxjs/toolkit'
import {$authApi} from '../../axios/axios'


export const getUserWishList = () => {
    return async (dispatch) => {
        try {
            const {data} = await $authApi.get(`api/favorite/wishlist/`, {params: {user: localStorage.getItem('user_id')}})
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
            if (data.status === 204) {
                // alert("Успешно удалено")
                dispatch(getUserWishList())
            }
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

export const getFavorites = () => {
    return async (dispatch) => {
        try {
            const {data} = await $authApi.get(`api/favorite/favorites/`)
            dispatch(setFavorites(data))
        } catch (e) {
            dispatch(setError(e))
        }
    }
}
export const deleteFavorite = (id) => {
    return async (dispatch) => {
        try {
            const data = await $authApi.delete(`api/favorite/favorites/${id}/`)
            if (data.status === 204) {
                dispatch(getUserWishList())
                dispatch(getFavorites())
            }
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

export const addToWishList = (wishlist_album, housing) => {
    return async (dispatch) => {
        try {
            const data = await $authApi.post(`api/favorite/favorites/`, {wishlist_album, housing})
            if (data.status === 201) {
                dispatch(getUserWishList())
                dispatch(getFavorites())
            }
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

export const addNewWishList = (title, housing) => {
    return async (dispatch) => {
        try {
            const wishlistResponse = await $authApi.post(`api/favorite/wishlist/`, { user: localStorage.getItem('user_id'), title });
            const wishlist_album = wishlistResponse.data.id;
            const favoriteResponse = await $authApi.post(`api/favorite/favorites/`, { wishlist_album, housing });
            if (favoriteResponse.status === 201) {
                dispatch(getUserWishList())
                dispatch(getFavorites())
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
        favorites: [],
        error: ''
    },
    reducers: {
        setWishLists: (state, action) => {
            state.wishLists = action.payload
        },
        setOneWishList: (state, action) => {
            state.oneWishList = action.payload
        },
        setFavorites: (state, action) => {
            state.favorites = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }

    }
})

export const {
    setWishLists,
    setOneWishList,
    setError,
    setFavorites,
} = wishListSlice.actions
export default wishListSlice.reducer