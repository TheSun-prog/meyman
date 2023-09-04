import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewModal: false
}

const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState,
    reducers: {
        setModalReview: (state, action) => {
            state.reviewModal = !state.reviewModal
        }
    }
})

export const { setModalReview } = reviewSlice.actions
export default reviewSlice.reducer