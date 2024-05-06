import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    subscriptionData: [],
    addSubscriptionData:{

    },
    editSubscriptionData:{

    },
    deleteSubscriptionData:{

    },
    errorMsg: "",
    isError: false
}

export const subscriptions = createAsyncThunk('getSubscription', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.getSubscription();
        if (status === 200) {
                //get subscription data
                return data.data
            } 
            
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)

export const addSubscription = createAsyncThunk('addSubscription',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.addSubscription(body);
        if (status === 200) {
            //add subscription data
            dispatch(setAddSubscription(body))
            Toastify.success("Subscription Plan Added Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const editSubscription = createAsyncThunk('editSubscription',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.editSubscription(body);
        if (status === 200) {
            //edit subscription data
            dispatch(setEditSubscription(body))
            Toastify.success("Subscription Plan Edited Successfuly");
            dispatch(setRefresh())
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})

export const deleteSubscription = createAsyncThunk('deleteSubscription',async (body, {rejectWithValue, dispatch}) => {
    try {
        const {data ,status } = await api.deleteSubscription(body);
        if (status === 200) {
            //delete subscription data
            dispatch(setDeleteSubscription(body))
            Toastify.success("Data Deleted Successfuly");
            dispatch(setRefresh());
        }
        return data.data
    } catch (err){
        Toastify.error(err.response.data.message);
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
})
export const subscriptionSlice = createSlice({
    name: "subscriptions",
    initialState,
    reducers: {
        setSubscription: (state, action) => {
            state.subscriptionData = action.payload
        },
        setAddSubscription: (state, action) => {
            state.addSubscriptionData = action.payload
        },
        setEditSubscription: (state, action) => {
            state.editSubscriptionData = action.payload
        },
        setDeleteSubscription: (state, action) => {
            state.deleteSubscriptionData = action.payload
        },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // subscriptionsPlan
        builder.addCase(subscriptions.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(subscriptions.fulfilled, (state, action) => {
            state.isLoading = true
            state.subscriptionData = action.payload
        })
        builder.addCase(subscriptions.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Add subscriptionsPlan
        builder.addCase(addSubscription.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(addSubscription.fulfilled, (state, action) => {
            state.isLoading = true
            state.addSubscriptionData = action.payload
        })
        builder.addCase(addSubscription.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Edit subscriptionsPlan
        builder.addCase(editSubscription.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(editSubscription.fulfilled, (state, action) => {
            state.isLoading = true
            state.editSubscriptionData = action.payload
        })
        builder.addCase(editSubscription.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })
        // Delete subscriptionsPlan
        builder.addCase(deleteSubscription.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(deleteSubscription.fulfilled, (state, action) => {
            state.isLoading = true
            state.deleteSubscriptionData = action.payload
        })
        builder.addCase(deleteSubscription.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

    }
})

export const { setSubscription,setRefresh, setAddSubscription, setEditSubscription,setDeleteSubscription } = subscriptionSlice.actions

export default subscriptionSlice.reducer;