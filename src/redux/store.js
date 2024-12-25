import { configureStore } from "@reduxjs/toolkit";
import { getDataReducer, loginRequest, registerRequest } from "./reducers";

const store = configureStore({
  reducer: {
    userDataRequest: getDataReducer,
    registerRequest: registerRequest,
    loginRequest: loginRequest,
  },
});

export default store;
