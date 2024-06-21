import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../helper/Api";
import Toastify from "../helper/Toastify";

const initialState = {
    isRefresh:false,
    isLoading: false,
    createEnquiryData: {
        
    },
    // changePasswordData: {
        
    // },
    errorMsg: "",
    isError: false
}

export const createEnquiry = createAsyncThunk('createEnquiry', async (body, { rejectWithValue, dispatch }) => {
    try {
        const { data, status } = await api.createEnquiry();
        if (status === 200) {
                dispatch(setCreateEnquiry(body))
                Toastify.success("Enquiry Created Successfuly");
                dispatch(setRefresh());
            } 
            return data.data
        } catch (err) {
        return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
    }
}
)
// export const changeProfilePassword = createAsyncThunk('changeProfilePassword', async (body, { rejectWithValue, dispatch }) => {
//     try {
//         const { data, status } = await api.changeProfilePassword(body);
//         if (status === 200) {
//                 //get categories data
//                 dispatch(setChangePassword(body))
//                 Toastify.success("Password Changed Successfuly");
//                 dispatch(setRefresh());
//             } 
//             return data.data
//         } catch (err) {
//             Toastify.error(err.response.data.message);
//             return rejectWithValue(err.response.data.message || "'Something went wrong. Please try again later.'")
//     }
// }
// )


export const enquiriesSlice = createSlice({
    name: "enquiries",
    initialState,
    reducers: {
        setCreateEnquiry: (state, action) => {
            state.createEnquiryData = action.payload
        },
        // setChangePassword: (state, action) => {
        //     state.changePasswordData = action.payload
        // },
        setRefresh:(state) => {
            state.isRefresh = !state.isRefresh
        }
    },
    extraReducers: (builder) => {

        // edit Profiles
        builder.addCase(createEnquiry.pending, (state) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(createEnquiry.fulfilled, (state, action) => {
            state.isLoading = true
            state.createEnquiryData = action.payload
        })
        builder.addCase(createEnquiry.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.payload
        })

        // change Profile Password
        // builder.addCase(changeProfilePassword.pending, (state) => {
        //     state.isLoading = false
        //     state.isError = false
        // })
        // builder.addCase(changeProfilePassword.fulfilled, (state, action) => {
        //     state.isLoading = true
        //     state.changePasswordData = action.payload
        // })
        // builder.addCase(changeProfilePassword.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.errorMsg = action.payload
        // })

    }
})

export const { setRefresh, setCreateEnquiry} = enquiriesSlice.actions

export default enquiriesSlice.reducer;