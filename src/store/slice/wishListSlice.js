import {createSlice} from '@reduxjs/toolkit'
import {$authApi} from '../../axios/axios'
import { message } from 'antd';

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
            const { data } = await $authApi.get(`api/favorite/wishlist/${id}/`);
            dispatch(setOneWishList(data));
        } catch (error) {
            if (error.response) {
                // The request was made, but the server responded with an error status code (4xx, 5xx).
                if (error.response.status === 404) {
                    // Handle the case when the resource is not found.
                    console.error('Resource not found (404)');
                } else {
                    console.error('Request failed with status code', error.response.status);
                }
            } else if (error.request) {
                // The request was made, but no response was received.
                console.error('No response received from the server.');
            } else {
                // Something happened in setting up the request that triggered an error.
                console.error('Request error:', error.message);
            }
            dispatch(setError(error.message || 'An error occurred'));
        }
    };
};

export const deleteWishList = (id) => {
    return async (dispatch) => {
        try {
            const response = await $authApi.delete(`api/favorite/wishlist/${id}/`);
            if (response.status === 204) {
                // Resource deleted successfully
                dispatch(getUserWishList());
            } else {
                // Handle unexpected status codes
                console.error('Unexpected status code:', response.status);
            }
        } catch (error) {
            if (error.response) {
                // The request was made, but the server responded with an error status code (4xx, 5xx).
                console.error('Request failed with status code', error.response.status);
            } else if (error.request) {
                // The request was made, but no response was received.
                console.error('No response received from the server.');
            } else {
                // Something happened in setting up the request that triggered an error.
                console.error('Request error:', error.message);
            }
            dispatch(setError(error.message || 'An error occurred'));
        }
    };
};

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
                message.success('Отель успешно удален из избранного');
                dispatch(getUserWishList())
                dispatch(getFavorites())
            }
        } catch (e) {
            message.error('Ошибка при удалении отеля из избранного');
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
        error: null
    },
    reducers: {
        setWishLists: (state, action) => {
            state.wishLists = action.payload;
            state.error = null; // Clear any previous errors
        },
        setOneWishList: (state, action) => {
            state.oneWishList = action.payload;
            state.error = null; // Clear any previous errors
        },
        setFavorites: (state, action) => {
            state.favorites = action.payload;
            state.error = null; // Clear any previous errors
        },
        setError: (state, action) => {
            // Instead of storing the AxiosError, store the error message or other relevant information.
            state.error = action.payload.message || 'An error occurred';
        }
    }
});

export const {
    setWishLists,
    setOneWishList,
    setError,
    setFavorites,
} = wishListSlice.actions
export default wishListSlice.reducer