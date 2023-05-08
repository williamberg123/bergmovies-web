import { configureStore } from '@reduxjs/toolkit';
import { pageReducer } from './page';
import { modalReducer } from './modal';

export const store = configureStore({
    reducer: {
        page: pageReducer,
        modal: modalReducer,
    },
});
