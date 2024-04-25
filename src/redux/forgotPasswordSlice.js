import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isLoading: false,
    isResending: false,
    data: {
        token: null
    },
    forgotpsw: {
        email: "",
    },
    screen: "EMAIL",
    errorMsg: "",
    isError: false
}

export const forgotPassword = createAsyncThunk('forgotPsw', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.forgotPassword(body);

        if (status === 200) {
                // render otp screen
                dispatch(setForgotPassword(body));
                dispatch(setScreen("OTP"));
                Toastify.success("OTP sent successfully");
            } 
            return data.data
        
    } catch (err) {
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const forgotPasswordSlice = createSlice({
    name: "forgotPassword",
    initialState,
    reducers: {
        setScreen: (state, action) => {
            state.screen = action.payload
        },
        setForgotPassword: (state, action) => {
            state.forgotpsw = action.payload
        }
    },
    extraReducers: (builder) => {

        // ForgotPassword
        builder.addCase(forgotPassword.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false
            state.forgotpsw = action.payload
        })
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // loginVerify
        // builder.addCase(loginVerify.pending, (state) => {
        //     state.isLoading = true
        //     state.isError = false
        // })
        // builder.addCase(loginVerify.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.data = action.payload
        // })
        // builder.addCase(loginVerify.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.errorMsg = action.payload
        // })

        // resendCode
        // builder.addCase(resendCode.pending, (state) => {
        //     state.isResending = true
        //     state.isError = false
        // })
        // builder.addCase(resendCode.fulfilled, (state, action) => {
        //     state.isResending = false
        //     state.data = action.payload
        // })
        // builder.addCase(resendCode.rejected, (state, action) => {
        //     state.isResending = false
        //     state.errorMsg = action.payload
        // })
    }
})

export const { setScreen, setForgotPassword } = forgotPasswordSlice.actions

export default forgotPasswordSlice.reducer;