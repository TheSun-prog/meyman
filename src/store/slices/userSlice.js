import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

const userSlice = createSlice({
    name: "user",
    initialState: {
        savedData: {},
        data: {},
    },
    reducers: {
        saveData: (state, action) => {
            const newData = action.payload;
            localStorage.setItem("userData", JSON.stringify(newData));
            return {
                ...state,
                savedData: { ...state.savedData, ...newData },
            };
        },
        loadDataFromLocalStorage: (state) => {
            const localStorageData = JSON.parse(localStorage.getItem("userData")) || {};
            return {
                ...state,
                savedData: { ...state.savedData, ...localStorageData },
            };
        },
        finishAuth: state => {
            const data = JSON.parse(localStorage.getItem("userData"));
            return {
                ...state, data
            }
        }
    },
});

export const { saveData, loadDataFromLocalStorage, finishAuth } = userSlice.actions;
export default userSlice.reducer;
