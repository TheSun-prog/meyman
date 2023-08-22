// В файле, где вы настраиваете Redux store
import { configureStore } from '@reduxjs/toolkit';
import headerModalsSlice from './slice/headerModalsSlice';

const store = configureStore({
  reducer: {
    headerModals: headerModalsSlice,
  },
});

export default store;
