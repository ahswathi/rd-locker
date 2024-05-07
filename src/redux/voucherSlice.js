import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    vouchersData: [],
    addVouchersData:{

    },
    editVouchersData:{

    },
    deleteVouchersData:{

    },
    errorMsg: "",
    isError: false
}

export const vouchers = createAsyncThunk('getVouchers', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.getVouchers();
        if (status === 200) {
                //get voucher data
                return data.data
            } 
            
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const addVouchers = createAsyncThunk('addVouchers',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.addVouchers(body);
        if (status === 200) {
            //add voucher data
            dispatch(setAddVouchers(body))
            Toastify.success("Voucher Plan Added Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const editVouchers = createAsyncThunk('editVouchers',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.editVouchers(body);
        if (status === 200) {
            //edit voucher data
            dispatch(setEditVouchers(body))
            Toastify.success("Voucher Plan Edited Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})

export const deleteVouchers = createAsyncThunk('deleteVouchers',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.deleteVouchers(body);
        if (status === 200) {
            //delete voucher data
            dispatch(setDeleteVouchers(body))
            Toastify.success("Voucher Deleted Successfuly");
            dispatch(setRefresh());
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const vouchersSlice = createSlice({
    name: "vouchers",
    initialState,
    reducers: {
        setVouchers: (state, action) => {
            state.vouchersData = action.payload
        },
        setAddVouchers: (state, action) => {
            state.addVouchersData = action.payload
        },
        setEditVouchers: (state, action) => {
            state.editVouchersData = action.payload
        },
        setDeleteVouchers: (state, action) => {
            state.deleteVouchersData = action.payload
        },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // vouchers
        builder.addCase(vouchers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(vouchers.fulfilled, (state, action) => {
            state.isLoading = true
            state.vouchersData = action.payload
        })
        builder.addCase(vouchers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Add vouchers
        builder.addCase(addVouchers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(addVouchers.fulfilled, (state, action) => {
            state.isLoading = true
            state.addVouchersData = action.payload
        })
        builder.addCase(addVouchers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Edit vouchers
        builder.addCase(editVouchers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(editVouchers.fulfilled, (state, action) => {
            state.isLoading = true
            state.editVouchersData = action.payload
        })
        builder.addCase(editVouchers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Delete vouchers
        builder.addCase(deleteVouchers.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(deleteVouchers.fulfilled, (state, action) => {
            state.isLoading = true
            state.deleteVouchersData = action.payload
        })
        builder.addCase(deleteVouchers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

    }
})

export const { setVouchers,setRefresh, setAddVouchers, setEditVouchers,setDeleteVouchers } = vouchersSlice.actions

export default vouchersSlice.reducer;