import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    editProfileData: {
        
    },
    changePasswordData: {
        
    },
    errorMsg: "",
    isError: false
}

export const editProfiles = createAsyncThunk('editProfile', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.editProfile();
        if (status === 200) {
                dispatch(setEditProfile(body))
                Toastify.success("Profile Edited Successfuly");
                dispatch(setRefresh());
            } 
            return data.data
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)
export const changeProfilePassword = createAsyncThunk('changeProfilePassword', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.changeProfilePassword(body);
        if (status === 200) {
                //get categories data
                dispatch(setChangePassword(body))
                Toastify.success("Password Changed Successfuly");
                dispatch(setRefresh());
            } 
            return data.data
        } catch (err) {
            Toastify.error(err.response.data.message);
            return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)


export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        setEditProfile: (state, action) => {
            state.editProfileData = action.payload
        },
        setChangePassword: (state, action) => {
            state.changePasswordData = action.payload
        },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // edit Profiles
        builder.addCase(editProfiles.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(editProfiles.fulfilled, (state, action) => {
            state.isLoading = true
            state.editProfileData = action.payload
        })
        builder.addCase(editProfiles.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // change Profile Password
        builder.addCase(changeProfilePassword.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(changeProfilePassword.fulfilled, (state, action) => {
            state.isLoading = true
            state.changePasswordData = action.payload
        })
        builder.addCase(changeProfilePassword.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

    }
})

export const { setRefresh, setEditProfile, setChangePassword} = settingSlice.actions

export default settingSlice.reducer;