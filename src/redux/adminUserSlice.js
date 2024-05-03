import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    adminUserData: {
        
    },
    addAdminUserData:{

    },
    editAdminUserData:{

    },
    deleteAdminUserData:{

    },
    changePasswordData:{

    },
    errorMsg: "",
    isError: false
}

export const adminUsers = createAsyncThunk('getAdminUser', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.getAdminUser();
        if (status === 200) {
                //get subscription data
                return data.data
            } 
            
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const addAdminUsers = createAsyncThunk('addAdminUser',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.addAdminUser(body);
        if (status === 200) {
            //add subscription data
            dispatch(setAddAdminUser(body))
            Toastify.success("AdminUsers Added Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const editAdminUsers = createAsyncThunk('editAdminUser',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.editAdminUser(body);
        if (status === 200) {
            //edit subscription data
            dispatch(setEditAdminUser(body))
            Toastify.success("AdminUsers Edited Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const deleteAdminUsers = createAsyncThunk('deleteAdminUser',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.deleteAdminUser(body);
        if (status === 200) {
            //edit subscription data
            dispatch(setDeleteAdminUser(body))
            Toastify.success("AdminUsers deleted Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const changePassword = createAsyncThunk('adminChangePassword',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.adminChangePassword(body);
        if (status === 200) {
            //edit subscription data
            dispatch(setChangePassword(body))
            Toastify.success("Changed Password Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const adminUserSlice = createSlice({
    name: "adminUsers",
    initialState,
    reducers: {
        setAdminUser: (state, action) => {
            state.adminUserData = action.payload
        },
        setAddAdminUser: (state, action) => {
            state.addAdminUserData = action.payload
        },
        setEditAdminUser: (state, action) => {
            state.editAdminUserData = action.payload
        },
        setDeleteAdminUser: (state, action) => {
            state.deleteAdminUserData = action.payload
        },
        setChangePassword: (state, action) => {
            state.changePasswordData = action.payload
        },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // get adminusers
        builder.addCase(adminUsers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(adminUsers.fulfilled, (state, action) => {
            state.isLoading = true
            state.adminUserData = action.payload
        })
        builder.addCase(adminUsers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Add adminusers
        builder.addCase(addAdminUsers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(addAdminUsers.fulfilled, (state, action) => {
            state.isLoading = true
            state.addAdminUserData = action.payload
        })
        builder.addCase(addAdminUsers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Edit adminusers
        builder.addCase(editAdminUsers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(editAdminUsers.fulfilled, (state, action) => {
            state.isLoading = true
            state.editAdminUserData = action.payload
        })
        builder.addCase(editAdminUsers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // delete Admin User
        builder.addCase(deleteAdminUsers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(deleteAdminUsers.fulfilled, (state, action) => {
            state.isLoading = true
            state.deleteAdminUserData = action.payload
        })
        builder.addCase(deleteAdminUsers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // change password Admin User
        builder.addCase(changePassword.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.isLoading = true
            state.changePasswordData = action.payload
        })
        builder.addCase(changePassword.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

    }
})

export const { setAdminUser,setAddAdminUser,setEditAdminUser,setDeleteAdminUser,setChangePassword,setRefresh, } = adminUserSlice.actions

export default adminUserSlice.reducer;