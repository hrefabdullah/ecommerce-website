import { configureStore } from "@reduxjs/toolkit";
import  darkModeReducer  from "./darkMode";
import menuSideReducer from './menuSide'

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        menuSide: menuSideReducer
    }
})