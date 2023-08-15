import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editing: false,
  name: localStorage.getItem('name') || 'Имя',
  surname: localStorage.getItem('surname') || 'Фамилия',
};

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    toggleEditing: (state) => {
      state.editing = !state.editing;
    },
    savePersonalInfo: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.editing = false;
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('surname', action.payload.surname);
    },
  },
});

export const { toggleEditing, savePersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
