import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "./menuSlice.js";

export const store = configureStore(
    {
        reducer : {
         menuBar : menuReducer
        }
    }
)