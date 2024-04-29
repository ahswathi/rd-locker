import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isLoading: false,
    delData: {
        
    },
    
    errorMsg: "",
    isError: false
}

export const deleteData = createAsyncThunk('deleteData',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.deleteData(body);
        if (status === 200) {
            //add category data
            dispatch(setDeleteData(body))
            Toastify.success("Data Deleted Successfuly");
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})

export const deleteDataSlice = createSlice({
    name: "deleteData",
    initialState,
    reducers: {
        setDeleteData: (state, action) => {
            state.delData = action.payload
        },
        
    },
    extraReducers: (builder) => {

        // Add Categories
        builder.addCase(deleteData.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.isLoading = true
            state.delData = action.payload
        })
        builder.addCase(deleteData.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

    }
})

export const { setDeleteData } = deleteDataSlice.actions

export default deleteDataSlice.reducer;