import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    selectCategory:'BRAND_PARTNER',
    brandPartnerData: [],
    addBrandPartnerData:{

    },
    editBrandPartnerData:{

    },
    deleteBrandPartnerData:{

    },
    errorMsg: "",
    isError: false
}

export const brandPartners= createAsyncThunk('getBrandPartner', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.getBrandPartner();
        if (status === 200) {
                //get voucher data
                return data.data
            } 
            
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const addBrandPartner = createAsyncThunk('addBrandPartner',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.addBrandPartner(body);
        if (status === 200) {
            //add voucher data
            dispatch(setAddBrandPartner(body))
            Toastify.success("Brand Partner Plan Added Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const editBrandPartner = createAsyncThunk('editBrandPartner',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.editBrandPartner(body);
        if (status === 200) {
            //edit voucher data
            dispatch(setEditBrandPartner(body))
            Toastify.success("Brand Partner Edited Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})

export const deleteBrandPartner = createAsyncThunk('deleteBrandPartner',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.deleteBrandPartner(body);
        if (status === 200) {
            //delete voucher data
            dispatch(setDeleteBrandPartner(body))
            Toastify.success("Voucher Deleted Successfuly");
            dispatch(setRefresh());
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const brandPartnerSlice = createSlice({
    name: "brandPartner",
    initialState,
    reducers: {
        setBrandPartner: (state, action) => {
            state.brandPartnerData = action.payload
        },
        setAddBrandPartner: (state, action) => {
            state.addBrandPartnerData = action.payload
        },
        setEditBrandPartner: (state, action) => {
            state.editBrandPartnerData = action.payload
        },
        setDeleteBrandPartner: (state, action) => {
            state.deleteBrandPartnerData = action.payload
        },
        setCategory: (state,action) => {
            state.selectCategory= action.payload
        },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // vouchers
        builder.addCase(brandPartners.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(brandPartners.fulfilled, (state, action) => {
            state.isLoading = true
            state.brandPartnerData = action.payload
        })
        builder.addCase(brandPartners.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Add vouchers
        builder.addCase(addBrandPartner.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(addBrandPartner.fulfilled, (state, action) => {
            state.isLoading = true
            state.addBrandPartnerData = action.payload
        })
        builder.addCase(addBrandPartner.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Edit vouchers
        builder.addCase(editBrandPartner.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(editBrandPartner.fulfilled, (state, action) => {
            state.isLoading = true
            state.editBrandPartnerData = action.payload
        })
        builder.addCase(editBrandPartner.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Delete vouchers
        builder.addCase(deleteBrandPartner.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(deleteBrandPartner.fulfilled, (state, action) => {
            state.isLoading = true
            state.deleteBrandPartnerData = action.payload
        })
        builder.addCase(deleteBrandPartner.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

    }
})

export const { setBrandPartner,setRefresh, setAddBrandPartner, setEditBrandPartner,setDeleteBrandPartner,setCategory } = brandPartnerSlice.actions

export default brandPartnerSlice.reducer;