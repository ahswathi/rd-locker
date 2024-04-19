import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        user: userSlice
    }
})