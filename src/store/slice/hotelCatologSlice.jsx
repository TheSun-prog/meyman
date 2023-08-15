import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
  heartActive: [],
  vishListValue: "",
};

const hotelCatologSlice = createSlice({
  name: 'hotelCatalog',
  initialState,
  reducers: {
    handleOpenModal: (state) =>{
      state.openModal = !state.openModal
    },
    activeHeard: (state,index) => {
      state.heartActive = [...state.heartActive]
      state.heartActive[index] = !state.heartActive[index]
    },
    setVishListValue: (state, action) => {
      state.vishListValue = action.payload
    },
    clearVishListValue: (state) => {
      state.vishListValue =  ""
    }
  },
});

export const {
  handleOpenModal,
  activeHeard,
  setVishListValue,
  clearVishListValue
} = hotelCatologSlice.actions;

export default hotelCatologSlice.reducer;