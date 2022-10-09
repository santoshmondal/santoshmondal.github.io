import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./data.slice";
import apputilSliceReducer from "./apputil.slice";

export default configureStore({
  reducer: {
    dataStore: dataSliceReducer,
    apputilStore: apputilSliceReducer,
  },
});
