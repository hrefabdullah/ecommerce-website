import { configureStore } from "@reduxjs/toolkit";
import  darkModeReducer  from "./darkMode";

export default configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})