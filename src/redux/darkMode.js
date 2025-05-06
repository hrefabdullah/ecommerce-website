import { createSlice } from "@reduxjs/toolkit";

export const darkMode = createSlice({
    name: 'darkMode',
    initialState: {
        value: false
    },
    reducers: {
        day: (state) => {
            state.value = !state.value
        }
    }
})

export const { day } = darkMode.actions

export default darkMode.reducer