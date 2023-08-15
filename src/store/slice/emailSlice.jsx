import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  switchBtn: false,
  email: localStorage.getItem("email") || 'email',
};

const emailSlice = createSlice({
  name: 'emailChange',
  initialState,
  reducers: {
    btnEditing: (state) => {
      state.switchBtn = !state.switchBtn;
    },
    saveEmailInfo: (state, action) => {
      state.email = action.payload.email;
      state.switchBtn = false
      localStorage.setItem('email', action.payload.email);
    },
  },
});

export const { btnEditing, saveEmailInfo } = emailSlice.actions;
export default emailSlice.reducer;