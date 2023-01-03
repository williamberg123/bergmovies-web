import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PageType = 'movies' | 'series' | 'collections' | 'favorites';

const pageSlice = createSlice({
	name: 'user',
	initialState: 'movies',
	reducers: {
		changeState: (state, action: PayloadAction<PageType>) => {
			return action.payload;
		},
	},
});

export const pageReducer = pageSlice.reducer;
export const { changeState } = pageSlice.actions;
