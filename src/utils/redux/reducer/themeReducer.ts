// themeReducer.ts

import { createSlice } from '@reduxjs/toolkit';

const themeReducer = createSlice({
  name: 'theme',
  initialState: {
    dark: false,
  },
  reducers: {
    setTheme(state, action) {
      state.dark = action.payload;
    },
  },
});

export default themeReducer.reducer;
export const { setTheme } = themeReducer.actions;

// Selector
export const selectDarkMode = (state: any) => state.theme.dark;
