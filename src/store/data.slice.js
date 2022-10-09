import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "datastore",
  initialState: {
    title: "Data Store",
    message: "Data Slice - React Redux",
  },
  reducers: {},
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
