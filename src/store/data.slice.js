import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "datastore",
  initialState: {
    title: "Data Store",
    message: "Data Slice - React Redux",

    connect: {
      githubUrl: "https://github.com/santoshmondal",
      linkedinUrl: "https://www.linkedin.com/in/santooindian/",
      mailTo: "mailto:santosh.ece06@gmail.com",
    },
  },
  reducers: {},
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
