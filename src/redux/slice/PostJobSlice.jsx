import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

export const fetchPostJobs = createAsyncThunk("/jobs", async (fromData) => {
    try {
        await axios.post(`${BASE_URL}:3001/jobs`, fromData)
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    from_data: [],
    from_status: "idle"
}

export const PostJobSlice = createSlice({
    name: "postjobslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostJobs.pending, (state) => {
            state.from_status = "Loading..."
        })
        builder.addCase(fetchPostJobs.fulfilled, (state, action) => {
            state.from_data = action.payload
            state.from_status = "Fulfiled"
        })
        builder.addCase(fetchPostJobs.rejected, (state) => {
            state.from_status = "Failed"
        })
    }
})