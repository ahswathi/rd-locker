import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";
import forgotPasswordSlice from "./forgotPasswordSlice";
import categoriesSlice from "./categoriesSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        user: userSlice,
        forgotPassword: forgotPasswordSlice,
        categories: categoriesSlice,
    }
})