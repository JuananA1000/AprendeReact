import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    toggleDarkTheme: (state) => {
      state.currentTheme = 'dark';
    },

    toggleLightTheme: (state) => {
      state.currentTheme = 'light';
    },
  },
});

export const { toggleDarkTheme, toggleLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
