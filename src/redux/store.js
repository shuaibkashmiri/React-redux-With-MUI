import { configureStore } from "@reduxjs/toolkit";
import { getDataReducer, registerRequest } from "./reducers";

const store = configureStore({
  reducer: {
    getData: getDataReducer,
    registerRequest: registerRequest,
  },
});

export default store;
