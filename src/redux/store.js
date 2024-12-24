import { configureStore } from "@reduxjs/toolkit";
import { userDataReducer, loginRequest, registerRequest } from "./reducers";

const store = configureStore({
  reducer: {
    getUserData: userDataReducer,
    registerRequest: registerRequest,
    loginRequest: loginRequest,
  },
});

export default store;
