import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";
import forgotPasswordSlice from "./forgotPasswordSlice";
import categoriesSlice from "./categoriesSlice";
import subCategoriesSlice from "./subCategoriesSlice";
import subscriptionSlice from "./subscriptionSlice";
import adminUserSlice from "./adminUserSlice";
import voucherSlice from "./voucherSlice";
import settingSlice from "./settingSlice";
import brandPartnerSlice from "./brandPartnerSlice";
import enquiriesSlice from "./enquiriesSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        user: userSlice,
        forgotPassword: forgotPasswordSlice,
        categories: categoriesSlice,
        subCategories: subCategoriesSlice,
        subscriptions:subscriptionSlice,
        adminUsers:adminUserSlice,
        vouchers:voucherSlice,
        setting: settingSlice,
        brandPartner:brandPartnerSlice,
        enquiries:enquiriesSlice
    }
})