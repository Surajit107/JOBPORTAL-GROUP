import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

export const fetchContact = createAsyncThunk("/users", async (fromData) => {
    try {
        await axios.post(`${BASE_URL}:3003/users`, fromData)
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    from_data: [],
    from_status: "idle"
}

export const ContactSlice = createSlice({
    name: "contactslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContact.pending, (state) => {
            state.from_status = "Loading..."
        })
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.from_data = action.payload
            state.from_status = "Fulfiled"
        })
        builder.addCase(fetchContact.rejected, (state) => {
            state.from_status = "Failed"
        })
    }
})