// slices/globalSlice.js
import {createSlice} from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {value: 0},
    reducers: {
        video: (state, {payload}) => {
            state.value = payload;
        },
    },
});

export const {video} = globalSlice.actions;
export default globalSlice.reducer;
