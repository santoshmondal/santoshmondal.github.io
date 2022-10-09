import { createSlice } from "@reduxjs/toolkit";

const apputilSlice = createSlice({
  name: "apputil",
  initialState: {
    drawerOpen: false,
    themeMode: "dark",
  },
  reducers: {
    toggleDrawerAction: (state, action) => {
      state.drawerOpen = action.payload;
    },

    toggleThemeAction: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleDrawerAction, toggleThemeAction } = apputilSlice.actions;
export default apputilSlice.reducer;
