// GlobalStore/selectors.js
import {createSelector} from "reselect";

const selectGlobalState = state => state.global;

export const globalSelector = createSelector(
    [selectGlobalState],
    global => global.value,
);

export const selectVideoSession = createSelector(
    [selectGlobalState],
    global => global.videoSession,
);
