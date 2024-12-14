import { configureStore } from "@reduxjs/toolkit";
import { getDataReducer, loginRequest, registerRequest } from "./reducers";

const store = configureStore({
  reducer: {
    getData: getDataReducer,
    registerRequest: registerRequest,
    loginRequest: loginRequest,
  },
});

export default store;
