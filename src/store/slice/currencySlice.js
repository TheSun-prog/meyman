import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: 'currency',
  initialState: 'USD',
  reducers: {
    setCurrency: (state, action) => {
      return action.payload; // Устанавливаем новое значение валюты из payload действия
    }
  }
})

export const { setCurrency } = currencySlice.actions; // Экспортируем действие setCurrency

export default currencySlice.reducer