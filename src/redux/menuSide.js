import { createSlice } from "@reduxjs/toolkit";

export const menuSide = createSlice({
    name: 'menuSide',
    initialState: {
        value: false
    },
    reducers: {
        menuOn: (state) => {
            state.value = !state.value
        }
    }
})

export const { menuOn } = menuSide.actions

export default menuSide.reducer