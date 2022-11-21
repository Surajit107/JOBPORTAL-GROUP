import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "../slice/BlogsSlice";
import { JobSlice } from "../slice/JobSlice";
import { SingleBlogSlice } from "../slice/SingleBlogSlice";
import { SingleJobSlice } from "../slice/SingleJobSlice";

export const Store = configureStore({
    reducer: {
        jobslice: JobSlice.reducer,
        singlejobslice: SingleJobSlice.reducer,
        blogslice: BlogSlice.reducer,
        singleblogslice: SingleBlogSlice.reducer
    }
})