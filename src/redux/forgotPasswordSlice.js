import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isLoading: false,
    isResending: false,
    resetToken: null,
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

export const verifyForgotPassword = createAsyncThunk('verifyForgotPsw', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.verifyForgotPsw(body);

        if (status === 200) {
            dispatch(setForgotPassword({
                email: ""
            }));
            Toastify.success("OTP verified successfully");
            dispatch(setToken(data.data))
            dispatch(setScreen("EMAIL"));
        }
        return data.data

    } catch (err) {
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const resendCode = createAsyncThunk('resendCode', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.forgotPassword(body);

        if (status === 200) {
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
        },
        setToken: (state, action) => {
            state.resetToken = action.payload
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
        })
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // loginVerify
        builder.addCase(verifyForgotPassword.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(verifyForgotPassword.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(verifyForgotPassword.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // resendCode
        builder.addCase(resendCode.pending, (state) => {
            state.isResending = true
            state.isError = false
        })
        builder.addCase(resendCode.fulfilled, (state, action) => {
            state.isResending = false
            state.data = action.payload
        })
        builder.addCase(resendCode.rejected, (state, action) => {
            state.isResending = false
            state.errorMsg = action.payload
        })
    }
})

export const { setScreen, setForgotPassword, setToken } = forgotPasswordSlice.actions

export default forgotPasswordSlice.reducer;