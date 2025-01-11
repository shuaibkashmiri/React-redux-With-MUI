import { configureStore } from "@reduxjs/toolkit";
import {
  getDataReducer,
  loginRequest,
  logoutReducer,
  registerRequest,
} from "./reducers";

const store = configureStore({
  reducer: {
    userDataRequest: getDataReducer,
    registerRequest: registerRequest,
    loginRequest: loginRequest,
    logoutRequest: logoutReducer,
  },
});

export default store;
