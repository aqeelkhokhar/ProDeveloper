// GlobalStore/slice.js
import {createSlice} from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        videoSession: {
            sessionId: null,
            apiKey: null,
            token: null,
            isConnected: false,
        },
        value: null,
    },
    reducers: {
        setVideoSession: (state, action) => {
            state.videoSession = action.payload;
        },
        clearVideoSession: state => {
            state.videoSession = {
                sessionId: null,
                apiKey: null,
                token: null,
                isConnected: false,
            };
        },
        setSessionConnected: (state, action) => {
            state.videoSession.isConnected = action.payload;
        },
        video: (state, {payload}) => {
            state.value = payload;
        },
    },
});

export const {setVideoSession, clearVideoSession, video, setSessionConnected} =
    globalSlice.actions;

export default globalSlice.reducer;
