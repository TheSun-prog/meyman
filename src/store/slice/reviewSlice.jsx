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
export const selectReviewModal = state => state.reviewSlice.reviewModal
export default reviewSlice.reducer