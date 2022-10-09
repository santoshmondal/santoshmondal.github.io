import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./data.slice";

export default configureStore({
  reducer: {
    dataStore: dataSliceReducer,
  },
});
