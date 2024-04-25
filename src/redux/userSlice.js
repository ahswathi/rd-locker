import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";

const initialState = {
    isLoggedIn: false,
    user: {

    },
    errorMsg: "",
    isError: false
}

export const getProfile = createAsyncThunk('getProfile', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.getProfile();

        if (status === 200) {
            return data.data
        }
    } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(getProfile.pending, (state) => {
            state.isLoggedIn = false
            state.isError = false
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        })
        builder.addCase(getProfile.rejected, (state, action) => {
            state.isLoggedIn = false
            state.errorMsg = action.payload
        })
    }
})

export const { setLogin } = userSlice.actions

export default userSlice.reducer