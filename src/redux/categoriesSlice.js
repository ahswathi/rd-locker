import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    catData: {
        
    },
    addData:{

    },
    editData:{

    },
    delData: {
        
    },
    searchData:{

    },
    errorMsg: "",
    isError: false
}

export const categories = createAsyncThunk('getCategories', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.getCategories();
        if (status === 200) {
                //get categories data
                return data.data
            } 
            
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const addCategory = createAsyncThunk('addCategories',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.addCategories(body);
        if (status === 200) {
            //add category data
            dispatch(setAddCategories(body))
            Toastify.success("Category Added Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const editCategory = createAsyncThunk('editCategories',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.editCategories(body);
        if (status === 200) {
            //add category data
            dispatch(setEditCategories(body))
            Toastify.success("Category Edited Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})

export const deleteData = createAsyncThunk('deleteData',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.deleteData(body);
        if (status === 200) {
            //add category data
            dispatch(setDeleteData(body))
            Toastify.success("Data Deleted Successfuly");
            dispatch(setRefresh());
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})

export const searchCategory = createAsyncThunk("searchCategory" , async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.searchCategory(body);
        if(status === 200){
            dispatch(setSearchCategory(data.data))
        }
    } catch (err) {
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})



export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.catData = action.payload
        },
        setAddCategories: (state, action) => {
            state.addData = action.payload
        },
        setEditCategories: (state, action) => {
            state.editData = action.payload
        },
        setDeleteData: (state, action) => {
            state.delData = action.payload
        },
        setSearchCategory: (state,action) => {
            state.searchData = action.payload
        },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // categories
        builder.addCase(categories.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(categories.fulfilled, (state, action) => {
            state.isLoading = true
            state.catData = action.payload
        })
        builder.addCase(categories.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Add Categories
        builder.addCase(addCategory.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.isLoading = true
            state.addData = action.payload
        })
        builder.addCase(addCategory.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Edit Categories
        builder.addCase(editCategory.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(editCategory.fulfilled, (state, action) => {
            state.isLoading = true
            state.editData = action.payload
        })
        builder.addCase(editCategory.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // Delete Categories
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

export const { setCategories,setAddCategories,setEditCategories,setRefresh,setDeleteData,setSearchCategory } = categoriesSlice.actions

export default categoriesSlice.reducer;