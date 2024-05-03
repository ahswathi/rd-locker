import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    subCatData: {
        
    },
    addSubCatData: {
        
    },
    editSubCatData: {
        
    },
    deleteSubCatData: {
        
    },
    
    errorMsg: "",
    isError: false
}

export const subCategories = createAsyncThunk('subCategories', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.subCategories();
        if (status === 200) {
                //get categories data
                return data.data
            } 
            
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)
export const addSubCategory = createAsyncThunk('addSubCategories', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.addSubCategories(body);
        console.log('data------------------------',data);
        if (status === 200) {
                //get categories data
                dispatch(setAddSubCategories(body))
                Toastify.success("SubCategory Added Successfuly");
                dispatch(setRefresh());
            } 
            return data.data
        } catch (err) {
            Toastify.error(err.response.data.message);
            return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)
export const editSubCategory = createAsyncThunk('editSubCategories', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.editSubCategories(body);
        if (status === 200) {
                //get categories data
                dispatch(setEditSubCategories(body))
                Toastify.success("SubCategory Edit Successfuly");
                dispatch(setRefresh());
            } 
            return data.data
        } catch (err) {
            Toastify.error(err.response.data.message);
            return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const deleteSubCategories = createAsyncThunk('deleteSubCategories',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.deleteSubCategories(body);
        if (status === 200) {
            //add category data
            dispatch(setDeleteSubCategories(body))
            Toastify.success("Data Deleted Successfuly");
            dispatch(setRefresh());
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})

export const subCategoriesSlice = createSlice({
    name: "subCategories",
    initialState,
    reducers: {
        setSubCategories: (state, action) => {
            state.subCatData = action.payload
        },
        setAddSubCategories: (state, action) => {
            state.addSubCatData = action.payload
        },
        setEditSubCategories: (state, action) => {
            state.editSubCatData = action.payload
        },
        setDeleteSubCategories: (state, action) => {
            state.deleteSubCatData = action.payload
        },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // subcategories
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

        // Add SubCategories
        builder.addCase(addSubCategory.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(addSubCategory.fulfilled, (state, action) => {
            state.isLoading = true
            state.addSubCatData = action.payload
        })
        builder.addCase(addSubCategory.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // Edit SubCategories
        builder.addCase(editSubCategory.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(editSubCategory.fulfilled, (state, action) => {
            state.isLoading = true
            state.editSubCatData = action.payload
        })
        builder.addCase(editSubCategory.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // Delete SubCategories
        builder.addCase(deleteSubCategories.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(deleteSubCategories.fulfilled, (state, action) => {
            state.isLoading = true
            state.deleteSubCatData = action.payload
        })
        builder.addCase(deleteSubCategories.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

    }
})

export const { setSubCategories, setAddSubCategories, setEditSubCategories,setDeleteSubCategories,setRefresh} = subCategoriesSlice.actions

export default subCategoriesSlice.reducer;