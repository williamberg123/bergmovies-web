import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVisible: false,
    itemType: null,
    name: null,
    backdropPath: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toHide: () => {
            return { isVisible: false, itemType: null, name: null, backdropPath: null };
        },
        toShow: (state, action) => {
            return { isVisible: true, ...action.payload };
        },
    },
});

export const modalReducer = modalSlice.reducer;
export const { toHide, toShow } = modalSlice.actions;
