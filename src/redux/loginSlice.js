import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";
import { setLogin } from "./userSlice";

const initialState = {
    isLoading: false,
    isResending: false,
    data: {
        token: null
    },
    loginInfo: {
        email: "",
        password: ""
    },
    screen: "EMAIL",
    errorMsg: "",
    isError: false
}

export const login = createAsyncThunk('login', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.login(body);

        if (status === 200) {

            if (!data.data.token && data.data.message === "2FA ENABLED") {

                // render otp screen
                dispatch(setLoginInfo(body));
                dispatch(setScreen("OTP"));
                Toastify.success("OTP sent successfully");
            } else {

                //save token
                Toastify.success("Login successfull.");
                localStorage.setItem("token", data.data.token);
                dispatch(setLogin(data.data));
            }
            return data.data
        }
    } catch (err) {
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)


export const loginVerify = createAsyncThunk('loginVerify', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.login2FA(body);

        if (status === 200) {
            //save token
            Toastify.success("Login successfull.");
            localStorage.setItem("token", data.data.token);
            dispatch(setLogin(data.data));

            return data.data
        }
    } catch (err) {
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const resendCode = createAsyncThunk('resendLoginCode', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.login(body);

        if (status === 200) {

            // render otp screen
            dispatch(setLoginInfo(body));
            Toastify.success("OTP sent successfully");

            return data.data
        }
    } catch (err) {
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setScreen: (state, action) => {
            state.screen = action.payload
        },
        setLoginInfo: (state, action) => {
            state.loginInfo = action.payload
        }
    },
    extraReducers: (builder) => {

        // login
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // loginVerify
        builder.addCase(loginVerify.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(loginVerify.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(loginVerify.rejected, (state, action) => {
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

export const { setScreen, setLoginInfo } = loginSlice.actions

export default loginSlice.reducer;