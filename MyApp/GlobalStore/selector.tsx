// selectors.js
import {createSelector} from "reselect";

const selectCounterState = (state: any) => state.global;

export const globalSelector = createSelector(
    [selectCounterState],
    counter => counter.value,
);
