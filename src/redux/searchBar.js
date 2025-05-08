import { createSlice } from "@reduxjs/toolkit";

export const searchBar = createSlice({
    name: 'searchBar',
    initialState: {
        value: false
    },
    reducers: {
        search: (state) => {
            state.value = !state.value
        }
    }
})

export const { search } = searchBar.actions

export default searchBar.reducer 