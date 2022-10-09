import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "datastore",
  initialState: {
    drawerOpen: false,
    title: "Data Store",
    message: "Data Slice - React Redux",
  },
  reducers: {
    toggleDrawerAction: (state, action) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const { toggleDrawerAction } = dataSlice.actions;
export default dataSlice.reducer;
