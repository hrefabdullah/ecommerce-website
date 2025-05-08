import { configureStore } from "@reduxjs/toolkit";
import  darkModeReducer  from "./darkMode";
import menuSideReducer from './menuSide'
import  searchBarReducer  from "./searchBar";

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        menuSide: menuSideReducer,
        searchBar: searchBarReducer
    }
})