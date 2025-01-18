import { configureStore } from "@reduxjs/toolkit";
import {
  getAllBlogs,
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
    blogsRequest: getAllBlogs,
  },
});

export default store;
