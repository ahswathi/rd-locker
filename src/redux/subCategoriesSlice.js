import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isLoading: false,
    subCatData: {
        
    },
    
    errorMsg: "",
    isError: false
}

export const subCategories = createAsyncThunk('subCategories', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.subCategories();
        console.log('data',data);
        if (status === 200) {
                //get categories data
                return data.data
            } 
            
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)


export const subCategoriesSlice = createSlice({
    name: "subCategories",
    initialState,
    reducers: {
        setSubCategories: (state, action) => {
            state.subCatData = action.payload
        },
        // setAddCategories: (state, action) => {
        //     state.addData = action.payload
        // },
        // setEditCategories: (state, action) => {
        //     state.editData = action.payload
        // },
    },
    extraReducers: (builder) => {

        // categories
        builder.addCase(subCategories.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(subCategories.fulfilled, (state, action) => {
            state.isLoading = true
            state.subCatData = action.payload
        })
        builder.addCase(subCategories.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Add Categories
        // builder.addCase(addCategory.pending, (state) => {
        //     state.isLoading = false
        //     state.isError = false
        // })
        // builder.addCase(addCategory.fulfilled, (state, action) => {
        //     state.isLoading = true
        //     state.addData = action.payload
        // })
        // builder.addCase(addCategory.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.errorMsg = action.payload
        // })
        // Edit Categories
        // builder.addCase(editCategory.pending, (state) => {
        //     state.isLoading = false
        //     state.isError = false
        // })
        // builder.addCase(editCategory.fulfilled, (state, action) => {
        //     state.isLoading = true
        //     state.subCatData = action.payload
        // })
        // builder.addCase(editCategory.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.errorMsg = action.payload
        // })

    }
})

export const { setSubCategories, } = subCategoriesSlice.actions

export default subCategoriesSlice.reducer;