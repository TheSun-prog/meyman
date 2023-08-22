import { createSlice } from '@reduxjs/toolkit';

const headerModalsSlice = createSlice({
  name: 'headerModals',
  initialState: { modalsClosed: false },
  reducers: {
    setModalsClosed: (state, action) => {
      state.modalsClosed = action.payload;
    },
  },
});

export const { setModalsClosed } = headerModalsSlice.actions;
export default headerModalsSlice.reducer

