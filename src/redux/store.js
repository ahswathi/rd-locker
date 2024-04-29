import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";
import forgotPasswordSlice from "./forgotPasswordSlice";
import categoriesSlice from "./categoriesSlice";
import deleteDataSlice from "./deleteDataSlice";
import subCategoriesSlice from "./subCategoriesSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        user: userSlice,
        forgotPassword: forgotPasswordSlice,
        categories: categoriesSlice,
        deleteData: deleteDataSlice,
        subCategories: subCategoriesSlice,
    }
})